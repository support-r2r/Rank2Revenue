"use client";

import React from "react";
import { FiBookOpen, FiEye, FiWatch, FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
  href: string;
  title: string;
  readTime: string;
  src: string;
}

interface BlogThumbnailsProps {
  cards: BlogCardProps[];
}

export const BlogThumbnails: React.FC<BlogThumbnailsProps> = ({ cards }) => {
  return (
    <div className="bg-white p-8 text-gray-800 md:p-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-gray-200 border border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
        <TitleCard />
        {cards.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ href, title, readTime }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
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
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
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
  </a>
);

export default BlogThumbnails;
