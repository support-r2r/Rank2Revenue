"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { supabase } from "../utils/supabaseClient";
import Card from "./Card"; // Big Card component

interface BlogCardProps {
  id: string;
  href: string;
  title: string;
  readTime: string;
  category: string;
  thumbnailUrl: string;
  tags: string[];
  description: string;
}

const BlogThumbnails: React.FC = () => {
  const [cards, setCards] = useState<BlogCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: blog_posts, error } = await supabase
          .from("blog_posts")
          .select("id, category, title, time, author, tags, thumbnailUrl, description");

        if (error) {
          throw new Error(error.message);
        }

        if (!blog_posts || blog_posts.length === 0) {
          throw new Error("No data returned from Supabase");
        }

        const formattedCards: BlogCardProps[] = blog_posts.map((post) => ({
          id: post.id,
          href: `/post/${post.id}`,
          title: post.title,
          readTime: post.time || "Unknown read time",
          category: post.category || "General",
          thumbnailUrl: post.thumbnailUrl || "/default-thumbnail.jpg",
          tags: post.tags || ["Uncategorized"],
          description: post.description || "No description available",
        }));

        setCards(formattedCards);
      } catch (err) {
        setError((err as Error).message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (cards.length === 0) return <div>No blog posts available.</div>;

  // Separate the big card (first post) and smaller cards (remaining posts)
  const [bigCard, ...smallCards] = cards;

  return (
    <div className="bg-white p-8 text-gray-800 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Big Card */}
        <Card
          title={bigCard.title}
          tags={bigCard.tags}
          description={bigCard.description}
          imageUrl={bigCard.thumbnailUrl}
          buttonText="Read More"
          buttonLink={bigCard.href}
        />

        {/* Smaller Thumbnails */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {smallCards.map((card) => (
            <BlogCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ href, title, readTime, category, thumbnailUrl, tags }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Link href={href} className="block">
        <Image
          src={thumbnailUrl}
          alt={title}
          className="h-56 w-full object-cover"
          width={500}
          height={300}
        />
      </Link>
      <div className="bg-white p-4 sm:p-6">
        {/* Time and Category */}
        <div className="block text-xs text-gray-500">
          <time dateTime={readTime}>{readTime}</time> • {category}
        </div>
        {/* Title */}
        <Link href={href}>
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        </Link>
        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogThumbnails;
