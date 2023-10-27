import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://donzegy38:YzSo9m4uAENup9xM@cluster0.wrwiecn.mongodb.net/blog_db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
