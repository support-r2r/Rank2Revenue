"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import BlogThumbnails from "../components/BlogThumbnails";


interface BlogPostProps {
  id: string;
  category: string;
  title: string;
  time: string;
  author: string;
  tag: string;
  content: string;
  tags: string[];
  thumbnailUrl?: string;
}

// Define the type for Supabase data
interface SupabaseBlogPost {
  id: string;
  category: string;
  title: string;
  time: string;
  author: string;
  tag: string;
  content: string;
  tags: string[];
  thumbnailurl?: string; // Use the exact field name as in the database
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select(
            "id, category, title, time, author, tag, content, tags, thumbnailurl"
          );

        if (error) throw error;

        // Specify the type of data returned from Supabase
        const formattedPosts = (data as SupabaseBlogPost[]).map((post) => ({
          id: post.id,
          category: post.category,
          title: post.title,
          time: post.time,
          author: post.author,
          tag: post.tag,
          content: post.content,
          tags: post.tags || [],
          thumbnailUrl: post.thumbnailurl || "",
        }));

        setPosts(formattedPosts);
      } catch (err) {
        // Specify the error type
        const errorMessage = (err as Error).message || "Failed to fetch posts";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero
        title="Our Blog"
        subtitle="Insights and Updates"
        description="Stay up-to-date with the latest trends, tips, and news in the world of digital marketing, design, and development."
        primaryButtonText="Subscribe"
        primaryButtonLink="#subscribe"
        secondaryButtonText="View All Articles"
        secondaryButtonLink="#articles"
        imageUrl="https://images.unsplash.com/photo-1544717305-2782549b5136?fit=crop&w=800&q=80"
      />
      <div className="p-8 space-y-8" id="articles">

  
        {!isLoading && !error && posts.length === 0 && (
          <div>No blog posts available.</div>
        )}
        {!isLoading && !error && posts.length > 0 && (
          <div>
            {posts.map((post) => (
              <BlogPost
                key={post.id}
                category={post.category}
                title={post.title}
                time={post.time}
                author={post.author}
                tag={post.tag}
                content={post.content}
                tags={post.tags}
                thumbnailUrl={post.thumbnailUrl}
              />
            ))}
          </div>
        )}
        <BlogThumbnails />
       
      
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
