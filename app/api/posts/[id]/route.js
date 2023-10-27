import connectMongoDB from "@/libs/db";
import BlogPosts from "@/models/BlogPosts";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newName: name,
    newTitle: title,
    newDesc: description,
    newCat: category,
  } = await req.json();
  await connectMongoDB();
  await BlogPosts.findByIdAndUpdate(id, { name, title, description, category });
  return NextResponse.json(
    { message: "Blog Post Has Been Updated" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  connectMongoDB();
  const post = await BlogPosts.findOne({ _id: id });
  return NextResponse.json({ post }, { status: 200 });
}
