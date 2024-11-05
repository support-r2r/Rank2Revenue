import React from 'react';

interface CardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ title, tags, description, imageUrl, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-6 md:p-8 space-y-4 md:space-y-0 md:space-x-6 border border-gray-200">
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700">{description}</p>

        {/* Button */}
        <a href={buttonLink} className="inline-flex items-center px-4 py-2 text-sm font-semibold text-orange-600 border border-orange-600 rounded-full hover:bg-orange-50">
          {buttonText}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded-xl w-full h-full object-cover bg-blue-100" />
      </div>
    </div>
  );
};

export default Card; 