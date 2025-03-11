"use client";

import React, { useEffect, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogPost from "../../components/BlogPost";

const BlogPage: React.FC = () => {
  // Memoize the blogPosts array
  const blogPosts = useMemo(
    () => [
      {
        category: "Election",
        title: "Portrait Photography In Early Days", 
        meta_title: "The Evolution of Portrait Photography | Rank2Revenue", 
        meta_desc: "Discover how portrait photography evolved in the early days and its impact on modern photography.",
        time: "6 mins ago",
        author: "AliSher Azimi",
        tag: "activewear",
        tags: ["Clothes", "Fashion", "Photography"],
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        slug: "social-media-101",
      },
    ],
    [] // Empty dependencies as the array is static
  );

  useEffect(() => {
    if (blogPosts.length > 0) {
      document.title = blogPosts[0].meta_title;
      document
        .querySelector("meta[name='description']")
        ?.setAttribute("content", blogPosts[0].meta_desc);
    }
  }, [blogPosts]);

  return (
    <div>
      <head>
        <title>{blogPosts[0]?.meta_title}</title>
        <meta name="description" content={blogPosts[0]?.meta_desc} />
        <link rel="canonical" href={`https://rank2revenue.com.au/blog/${blogPosts[0]?.slug}`} />
      </head>

      <Navbar />
      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {blogPosts[0].title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{blogPosts[0].meta_desc}</p>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              slug={post.slug}
              meta_title={post.meta_title}
              meta_desc={post.meta_desc}
              category={post.category}
              title={post.title}
              time={post.time}
              author={post.author}
              tag={post.tag}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
