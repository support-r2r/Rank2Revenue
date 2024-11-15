"use client";
import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Admin: React.FC = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Insert data into the blog_posts table
      const { error } = await supabase.from("blog_posts").insert([
        {
          category,
          title,
          time,
          author,
          tag,
          content,
          tags, // JSON array for tags
          thumbnailUrl,
        },
      ]);

      if (error) throw error;

      alert("Blog post added successfully!");
      // Clear the form
      setCategory("");
      setTitle("");
      setTime("");
      setAuthor("");
      setTag("");
      setContent("");
      setTags([]);
      setThumbnailUrl("");
    } catch (err: unknown) {
      // Use `unknown` type and handle it as an error
      if (err instanceof Error) {
        alert(err.message || "Failed to add the post.");
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium">
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2 text-sm font-medium">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2 text-sm font-medium">
          Time
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2 text-sm font-medium">
          Author
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2 text-sm font-medium">
          Tag
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-2 text-sm font-medium">
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          ></textarea>
        </label>
        <label className="block mb-2 text-sm font-medium">
          Tags (comma-separated)
          <input
            type="text"
            value={tags.join(", ")}
            onChange={(e) =>
              setTags(e.target.value.split(",").map((tag) => tag.trim()))
            }
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-4 text-sm font-medium">
          Thumbnail URL
          <input
            type="url"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Admin;
