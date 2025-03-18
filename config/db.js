const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const link = process.env.MONGODB_CONNECT_LINK
  try {
    // await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoose.connect(link);
    // console.log("MongoDB Connected");
    console. log("Database connected Successfully");
  } catch (error) {
    // console.error("MongoDB Connection Failed:", error);
    console.log(`Database cannot be connected due to ${error} `);
    process.exit(1);
  }
};

module.exports = connectDB;
