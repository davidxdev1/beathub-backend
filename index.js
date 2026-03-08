import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

(async () => {
  await connectDB(uri);
  console.log("🚀 App is running...");
})();