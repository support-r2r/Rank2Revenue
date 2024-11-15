"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import BlogPost from "../../components/BlogPost";

interface BlogPostData {
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
  const { id } = params as { id: string };

  const [post, setPost] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    console.log("Attempting to fetch post with ID:", id);

    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Supabase Error:", error.message);
          throw error;
        }

        if (!data) {
          console.warn("No data returned for ID:", id);
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
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <BlogPost
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
