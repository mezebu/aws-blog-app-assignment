import mongoose, { Schema } from "mongoose";

const blogPostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["News", "Entertainment", "Sports", "Tech"],
      default: "News",
    },
  },
  { timestamps: true }
);

const BlogPosts =
  mongoose.models.BlogPosts || mongoose.model("BlogPosts", blogPostSchema);

export default BlogPosts;
