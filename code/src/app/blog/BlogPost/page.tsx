"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogPost from "../../components/BlogPost";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      category: "Election",
      title: "Portrait Photography In Early Days", // Visible on page
      meta_title: "The Evolution of Portrait Photography | Rank2Revenue", // Used in SEO
      meta_description:
        "Discover how portrait photography evolved in the early days and its impact on modern photography.",
      time: "6 mins ago",
      author: "AliSher Azimi",
      tag: "activewear",
      tags: ["Clothes", "Fashion", "Photography"],
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      slug: "social-media-101",
    },
  ];

  useEffect(() => {
    if (blogPosts.length > 0) {
      document.title = blogPosts[0].meta_title; // Use meta_title for SEO
      document
        .querySelector("meta[name='description']")
        ?.setAttribute("content", blogPosts[0].meta_description);
    }
  }, []);

  return (
    <div>
      <head>
        <title>{blogPosts[0]?.meta_title}</title>
        <meta name="description" content={blogPosts[0]?.meta_description} />
        <link rel="canonical" href={`https://rank2revenue.com.au/blog/${blogPosts[0]?.slug}`} />
      </head>

      <Navbar />
      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* Render Visible Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {blogPosts[0].title}
          </h1>

          {/* Display Meta Description on the Page */}
          <p className="text-lg text-gray-700 mb-6">{blogPosts[0].meta_description}</p>

          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              slug={post.slug}
              meta_title={post.meta_title}
              meta_desc={post.meta_description}
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


// "use client";

// import React from "react";
// import Navbar from "../../components/Navbar"; // Adjust the import path as needed
// import Footer from "../../components/Footer"; // Adjust the import path as needed
// import BlogPost from "../../components/BlogPost"; // Adjust the import path as needed

// const BlogPage: React.FC = () => {
//   const blogPosts = [
//     {
//       category: "Election",
//       title: "Portrait Photography In Early Days",
//       time: "6 mins ago",
//       author: "AliSher Azimi",
//       tag: "activewear",
//       content:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
//       tags: ["Election", "people", "Election2020", "trump", "Joe"],
//       slug: "social-media-101",
//     },
//     // Add more blog posts as needed
//   ];

//   return (
//     <div>
//       <Navbar />
//       <main className="bg-gray-100 py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//             Our Blog
//           </h1>
//           {blogPosts.map((post, index) => (
//             <BlogPost
//               key={index}
//               slug={post.slug}
//               category={post.category}
//               title={post.title}
//               time={post.time}
//               author={post.author}
//               tag={post.tag}
//               content={post.content}
//               tags={post.tags}
//             />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default BlogPage;
