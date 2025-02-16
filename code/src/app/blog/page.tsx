"use client";

import React, { useEffect } from "react";
// import { supabase } from "../utils/supabaseClient";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import BlogPost from "../components/BlogPost";
import BlogThumbnails from "../components/BlogThumbnails";

// interface BlogPostProps {
//   id: string;
//   category: string;
//   title: string;
//   time: string;
//   author: string;
//   tag: string;
//   content: string;
//   tags: string[];
//   thumbnailUrl?: string;
// }

// Define the type for Supabase data
// interface SupabaseBlogPost {
//   id: string;
//   category: string;
//   title: string;
//   time: string;
//   author: string;
//   tag: string;
//   content: string;
//   tags: string[];
//   thumbnailurl?: string; // Use the exact field name as in the database
// }

const Blog: React.FC = () => {
  // const [posts, setPosts] = useState<BlogPostProps[]>([]);
  // const [isLoading, setIsLoading] = useState(true); // Tracks loading state
  // const [error, setError] = useState<string | null>(null); // Stores error message

  useEffect(() => {
    const fetchPosts = async () => {
      // try {
      //   const { data, error } = await supabase
      //     .from("blog_posts")
      //     .select(
      //       "id, category, title, time, author, tag, content, tags, thumbnailurl"
      //     );

      //   if (error) throw error;

      //   const formattedPosts = (data as SupabaseBlogPost[]).map((post) => ({
      //     id: post.id,
      //     category: post.category,
      //     title: post.title,
      //     time: post.time,
      //     author: post.author,
      //     tag: post.tag,
      //     content: post.content,
      //     tags: post.tags || [],
      //     thumbnailUrl: post.thumbnailurl || "",
      //   }));

      //   setPosts(formattedPosts);
      // } catch (err) {
      //   const errorMessage = (err as Error).message || "Failed to fetch posts";
      //   setError(errorMessage);
      // } finally {
      //   setIsLoading(false);
      // }
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
        imageUrl="https://i.imgur.com/wUdAVWC.png"
      />
      <div className="p-8 space-y-8" id="articles">
        

        {/* BlogThumbnails */}
        <BlogThumbnails />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
