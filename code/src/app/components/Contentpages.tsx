"use client";
import React from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface Content {
  label: string;
  stepNumber: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

interface ContentPagesProps {
  contentData: Content[];
}

const ContentPages: React.FC<ContentPagesProps> = ({ contentData }) => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={ref} className="relative">
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
  const CARD_HEIGHT = 600; // Increased card height to accommodate larger images
  const scaleFromPct = (position - 1) / totalCards;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -CARD_HEIGHT * (totalCards - position)]
  );

  // Prevent additional upward movement for the last card
  const yValue = position === totalCards ? 0 : y;

  // Alternate background colors for each card
  const isWhiteCard = position % 2 === 1;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: yValue,
        background: isWhiteCard ? "white" : "black",
        color: isWhiteCard ? "black" : "white",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-start px-4 py-8"
    >
      {/* Larger Image prominently displayed at the top */}
      <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
        {/* Increased height from h-64 to h-96 */}
        <Image
          alt={content.title}
          src={content.imageUrl}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content */}
      <h3 className="mb-2 text-center text-2xl font-semibold md:text-4xl">
        {`${content.stepNumber}: ${content.title}`}
      </h3>
      <h4 className="mb-4 text-lg font-medium text-gray-500">{content.label}</h4>

      {/* Description and button */}
      <div className="flex max-w-lg flex-col items-center text-sm md:text-base">
        <p className="mb-4 text-center">{content.description}</p>
        <a
          href={content.buttonLink}
          className={`rounded px-6 py-4 text-base font-medium uppercase transition-all hover:-translate-y-1 md:text-lg ${
            isWhiteCard
              ? "bg-blue-600 text-white shadow-md hover:shadow-lg"
              : "bg-white text-blue-600 shadow-md hover:shadow-lg"
          }`}
        >
          {content.buttonText}
        </a>
      </div>
    </motion.div>
  );
};

export default ContentPages;
