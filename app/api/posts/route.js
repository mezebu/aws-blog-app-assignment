import connectMongoDB from "@/libs/db";
import BlogPosts from "@/models/BlogPosts";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  await connectMongoDB();
  await BlogPosts.create(body);

  return NextResponse.json({ message: "Posts Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await BlogPosts.find();
  return NextResponse.json({ posts });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await BlogPosts.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog Post Has Been Deleted" },
    { status: 200 }
  );
}
