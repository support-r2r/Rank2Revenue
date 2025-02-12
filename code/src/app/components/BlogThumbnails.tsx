"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { supabase } from "../utils/supabaseClient";
import { FiBookOpen, FiEye, FiWatch, FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
  slug: string;
  id: string;
  href: string;
  title: string;
  readTime: string;
}

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  time: string;
}

const BlogThumbnails: React.FC = () => {
  const [cards, setCards] = useState<BlogCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use 'const' for variables that are not reassigned
        const { data: blog_posts, error } = await supabase
          .from("blog_posts")
          .select("id, slug, title, time");

        if (error) {
          throw new Error(error.message);
        }

        console.log("Fetched data:", blog_posts);

        if (!blog_posts || blog_posts.length === 0) {
          throw new Error("No data returned from Supabase");
        }

        // Provide specific types instead of 'any'
        const formattedCards = blog_posts.map((post: BlogPostData) => ({
          id: post.id,
          slug: post.slug,
          href: `/post/${post.slug}`, // Adjust this if you have a different routing setup
          title: post.title,
          readTime: post.time || "Unknown read time",
        }));

        setCards(formattedCards);
      } catch (err) {
        const errorMessage = (err as Error).message || "An unexpected error occurred";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (cards.length === 0) return <div>No blog posts available.</div>;

  return (
    <div className="bg-white p-8 text-gray-800 md:p-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-gray-200 border border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
        <TitleCard />
        {cards.map((card) => (
          <BlogCard key={card.slug} {...card} />
        ))}
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ href, title, readTime }) => {
  return (
    <Link
      href={href}
      className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-gray-100 md:h-80 md:p-9"
    >
      <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-gray-500 transition-colors duration-500 group-hover:text-gray-800">
        <FiWatch className="text-base" />
        <span>{readTime}</span>
      </div>
      <h2 className="relative z-10 text-3xl leading-tight text-gray-900 transition-transform duration-500 group-hover:-translate-y-2">
        {title}
      </h2>
      <FiEye className="absolute right-3 top-4 z-10 text-2xl text-gray-500 transition-colors group-hover:text-gray-800" />
      <Corners />
    </Link>
  );
};

const Corners: React.FC = () => (
  <>
    <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-blue-500 transition-all duration-500 group-hover:scale-100" />
  </>
);

const TitleCard: React.FC = () => (
  <Link
    href="#"
    className="group relative flex h-56 flex-col justify-between bg-white p-6 shadow-sm rounded-lg md:h-80 md:p-9"
  >
    <h2 className="text-4xl uppercase leading-tight text-gray-900">
      <span className="text-gray-500 transition-colors duration-500 group-hover:text-blue-500">
        Join our
      </span>
      <br />
      Weekly Newsletter
    </h2>
    <div className="flex items-center gap-1.5 text-xs uppercase text-gray-500 transition-colors duration-500 group-hover:text-gray-800">
      <FiBookOpen className="text-base" />
      <span>Rank2revenue</span>
    </div>
    <FiArrowUpRight className="absolute right-3 top-4 text-2xl text-gray-500 transition-colors duration-500 group-hover:text-blue-500" />
  </Link>
);

export default BlogThumbnails;
