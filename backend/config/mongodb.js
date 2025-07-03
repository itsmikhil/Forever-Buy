import mongoose from "mongoose";

const mongoDBConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default mongoDBConnect;
