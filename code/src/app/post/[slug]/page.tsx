"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import BlogPost from "../../components/BlogPost";

interface BlogPostData {
  slug: string;
  category: string;
  title: string;
  time: string;
  author: string;
  tag: string;
  content: string;
  tags: string[];
  thumbnailurl?: string;
}

const PostPage: React.FC = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [post, setPost] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    console.log("Attempting to fetch post with ID:", slug);

    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Supabase Error:", error.message);
          throw error;
        }

        if (!data) {
          console.warn("No data returned for ID:", slug);
          setError("Post not found");
          return;
        }

        console.log("Fetched post data:", data);
        setPost(data as BlogPostData); // Type assertion
      } catch (err: unknown) {
        const errorMessage = (err as Error).message || "Failed to fetch the post";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <BlogPost
      slug={post.slug}
      category={post.category}
      title={post.title}
      time={post.time}
      author={post.author}
      tag={post.tag}
      content={post.content}
      tags={post.tags || []}
      thumbnailUrl={post.thumbnailurl}
    />
  );
};

export default PostPage;
