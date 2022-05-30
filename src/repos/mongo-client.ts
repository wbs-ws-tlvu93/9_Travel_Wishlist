import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();

const uri = process.env.MONGO_URI || '';

const connectDB = async () => {
  const client = await mongoose.connect(uri);
  console.log(`MongoDB connected ${client.connection.host}`);
};

export default connectDB;
