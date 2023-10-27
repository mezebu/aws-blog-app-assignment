"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SelectInput from "./SelectInput";

const BlogForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to post data to database");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full bg-slate-50 p-3 shadow-md rounded"
      onSubmit={handleSubmit}
    >
      <div className="w-full px-3 my-10 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Enter your name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Title of blog post
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <SelectInput formData={formData} handleChange={handleChange} />

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Write your blog posts
        </label>
        <textarea
          id="message"
          rows="7"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
          placeholder="Write your thoughts here..."
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
        >
          Add Blog Post
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
