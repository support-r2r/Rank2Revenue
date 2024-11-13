"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  tags,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-10 border border-gray-300 max-w-5xl mx-auto transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-black">
        {/* Title */}
        <h2 className="text-4xl font-bold">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700">{description}</p>

        {/* Button */}
        <a
          href={buttonLink}
          className="mt-6 inline-flex items-center px-6 py-3 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 md:w-1/2 rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          layout="responsive"
          width={500} // Set appropriate width
          height={300} // Set appropriate height
        />
      </div>
    </div>
  );
};

export default Card;
