import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    // extract all info
    let { name, description, sizes, price, category, subCategory, bestseller } =
      req.body;

    // validation of info and checks if it atleast contains 1 image
    if (
      !name ||
      !description ||
      !sizes ||
      !price ||
      !category ||
      !subCategory ||
      !req.files
    ) {
      return res.json({ success: false, message: "Enter all required fields" });
    }

    // image validation
    let image1 = req.files.image1?.[0];
    let image2 = req.files.image2?.[0];
    let image3 = req.files.image3?.[0];
    let image4 = req.files.image4?.[0];

    // conatins only valid images
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // function to upload image in cloudinary
    const uploadToCloudinary = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        stream.end(fileBuffer);
      });
    };

    // image urls array
    const imageUrls = await Promise.all(
      images.map((img) => uploadToCloudinary(img.buffer))
    );

    // uploading product in db
    let newProduct = await productModel.create({
      name,
      description,
      sizes: JSON.parse(sizes),
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      images: imageUrls,
    });

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    let allproducts = await productModel.find({});
    return res.json({ success: true, allproducts });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await productModel.findById(id);
    return res.json({ success: true, singleProduct: result });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await productModel.findByIdAndDelete(id);
    return res.json({ success: true,message:"Item Deleted successfully", deletedProduct: result });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, singleProduct, deleteProduct };
