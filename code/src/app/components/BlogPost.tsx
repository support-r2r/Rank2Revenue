"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Image from "next/image"; // Import Image from next/image
import Navbar from "./Navbar"; // Import the Navbar component

interface BlogPostProps {
  category: string;
  title: string;
  time: string;
  author: string;
  tag: string;
  content: string;
  tags: string[];
  thumbnailUrl?: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  category,
  title,
  time,
  author,
  tag,
  content,
  tags,
  thumbnailUrl,
}) => {
  const router = useRouter(); // Use useRouter from Next.js

  const navigateToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <>
      {/* Add the Navbar */}
      <Navbar />

      {/* Blog Post Content */}
      <div className="relative pt-20 p-4"> {/* Add pt-20 to create spacing below the navbar */}
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            {thumbnailUrl && (
              <Image
                src={thumbnailUrl}
                alt={title}
                width={800} // Adjust width as needed
                height={450} // Adjust height as needed
                className="w-full rounded-t-lg"
                layout="responsive" // Use layout="responsive" for better responsiveness
              />
            )}
            <div>
              <a
                href="#"
                className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
                onClick={navigateToHome}
              >
                {category}
              </a>
              <h1 className="text-gray-900 font-bold text-4xl">{title}</h1>
              <div className="py-5 text-sm font-regular text-gray-900 flex">
                <span className="mr-3 flex flex-row items-center">
                  <svg
                    className="text-indigo-600"
                    fill="currentColor"
                    height="13px"
                    width="13px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </svg>
                  <span className="ml-1">{time}</span>
                </span>
                <a
                  href="#"
                  className="flex flex-row items-center hover:text-indigo-600 mr-3"
                >
                  <svg
                    className="text-indigo-600"
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <span className="ml-1">{author}</span>
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center hover:text-indigo-600"
                >
                  <svg
                    className="text-indigo-600"
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="currentColor"
                      d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4,4 C5,4.44771525 6,5 C6,5.55228475 5,6 Z"
                    />
                  </svg>
                  <span className="ml-1">{tag}</span>
                </a>
              </div>
              <hr />
              <p className="text-base leading-8 my-5">{content}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tagItem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    #{tagItem}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
