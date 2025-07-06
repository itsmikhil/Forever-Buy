import userModel from "../models/userModel.js";

let handleAddToCart = async (req, res) => {
  try {
    let { id, quantity, size, userId } = req.body;

    console.log(userId);

    // checking for missing fields
    if (!id || !size || !userId || quantity == null || quantity <= 0) {
      return res.json({ success: false, message: "Missing or invalid fields" });
    }

    let result = await userModel.findById(userId);

    // invalid userId
    if (!result) {
      return res.json({ success: false, message: "User doesnt exist" });
    }

    // find index of product if it exist
    let idx = result.cartData.findIndex(
      (item) => item.productId.toString() === id && item.size === size
    );

    // product exist
    if (idx != -1) {
      result.cartData[idx].quantity += 1;
      await result.save();
      return res.json({ success: true, message: "Product quantity updated" });
    }

    // new product in cart
    let newData = {
      productId: id,
      quantity,
      size,
    };

    result.cartData.push(newData);

    await result.save();

    return res.json({ success: true, message: "Product added to cart" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

let handleUpdateCart = async (req, res) => {
  try {
    let { quantity, size, id, userId } = req.body;

    if (quantity == null || quantity < 0 || !size || !id) {
      return res.json({ success: false, message: "Enter all required feilds" });
    }

    let result = await userModel.findById(userId);

    if (!result) {
      return res.json({ success: false, message: "User not found" });
    }

    let idx = result.cartData.findIndex(
      (item) => item.productId.toString() === id && item.size === size
    );

    if (idx != -1) {
      if (Number(quantity) === 0) {
        result.cartData.splice(idx, 1);

        await result.save();

        return res.json({
          success: true,
          message: "Product removed from cart",
        });
      }

      result.cartData[idx].quantity = quantity;

      await result.save();

      return res.json({ success: true, message: "Quantity updated" });
    } else {
      return res.json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

let handleGetData = async (req, res) => {
  try {
    let { userId } = req.body;

    let result = await userModel.findById(userId);

    if (!result) {
      return res.json({ success: false, message: "User not found" });
    }

    result = await result.populate("cartData.productId");

    return res.json({
      success: true,
      cartData: result.cartData,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

let handleDeleteFromCart = async (req, res) => {
  try {
    let { userId, id, size } = req.body;

    if (!id) {
      return res.json({ success: false, message: "Provide product id" });
    }

    let result = await userModel.findById(userId);
    result.cartData = result.cartData.filter(
      (item) => item.productId.toString() !== id && item.size !== size
    );

    await result.save();

    return res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export { handleAddToCart, handleUpdateCart, handleGetData,handleDeleteFromCart };
