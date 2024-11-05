import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="py-24 flex items-center min-h-screen justify-center bg-white">
      <div className="mx-auto max-w-[43rem]">
        {/* Text Section */}
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-indigo-600/95">
            {subtitle}
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
            {title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={primaryButtonLink}
            className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Animated Down Arrow */}
        <div className="mt-20 flex justify-center">
          <svg
            className="w-8 h-8 text-indigo-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
