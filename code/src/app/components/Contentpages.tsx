"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface Content {
  label: string;
  stepNumber: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  ctaClasses: string;
}

interface ContentPagesProps {
  contentData: Content[];
}

const CARD_HEIGHT = 500; // Set a uniform card height for animation consistency

const ContentPages: React.FC<ContentPagesProps> = ({ contentData }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Calculate total height needed to animate all cards
  const containerHeight = CARD_HEIGHT * contentData.length;

  return (
    <section ref={ref} className="relative" style={{ height: containerHeight }}>
      {contentData.map((content, idx) => (
        <Card
          key={idx}
          position={idx + 1}
          content={content}
          scrollYProgress={scrollYProgress}
          totalCards={contentData.length}
        />
      ))}
    </section>
  );
};

const Card = ({
  position,
  content,
  scrollYProgress,
  totalCards,
}: {
  position: number;
  content: Content;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
}) => {
  const scaleFromPct = (position - 1) / totalCards;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  // Determine the background and text color based on the card position
  const isOddCard = position % 2;
  const isLastCard = position === totalCards;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: !isLastCard ? y : undefined, // No animation for the last card
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className={`sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4 ${
        isLastCard ? "" : "py-8" // Remove additional padding for the last card
      }`}
    >
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {/* Image in the first grid */}
        <div className="relative h-60 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            alt={content.title}
            src={content.imageUrl}
            fill
            className="object-cover"
          />
        </div>

        {/* Button in the second grid */}
        <div className="flex items-center justify-center">
          <a
            href={content.buttonLink}
            className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${content.ctaClasses} ${
              isOddCard
                ? "bg-blue-600 text-white shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
                : "bg-white text-black shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
            }`}
          >
            <span>{content.buttonText}</span>
            <FiArrowRight />
          </a>
        </div>

        {/* Text content in the third grid */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="mb-1 text-xl font-semibold md:mb-2 md:text-2xl lg:text-4xl">
            {`${content.stepNumber}: ${content.title}`}
          </h3>
          <h4 className="mb-2 text-sm font-medium text-gray-500 md:mb-4 md:text-lg">
            {content.label}
          </h4>
          <p className="text-xs md:text-base">{content.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentPages;
