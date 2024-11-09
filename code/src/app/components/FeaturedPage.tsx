import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

interface Service {
  title: string;
  href: string;
  description: string;
  imgUrl: string;
}

const services: Service[] = [
  {
    title: "Website Development",
    href: "/services/websiteDevelopment",
    description: `
      We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.
    `,
    imgUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SEO Optimization",
    href: "/services/seoOptimization",
    description: `
      Improve your website's visibility on search engines with our SEO services, focusing on targeted keywords and local or national reach to drive more organic traffic.
    `,
    imgUrl:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Social Media Management",
    href: "/services/socialMediaManagement",
    description: `
      Enhance your social media presence with regular posts, targeted audience engagement, and brand-optimized profiles on platforms like Facebook and Instagram.
    `,
    imgUrl:
      "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const FeaturedPage: React.FC = () => {
  return (
    <div className="bg-white">
      {services.map((service, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={service.imgUrl}
          subheading={service.title}
          heading="Explore Our Service"
        />
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent: React.FC<{ imgUrl: string; subheading: string; heading: string }> = ({
  imgUrl,
  subheading,
  heading,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <VelocityOverlayText subheading={subheading} />
      </div>
    </div>
  );
};

const StickyImage: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" style={{ opacity }} />
    </motion.div>
  );
};

const VelocityOverlayText: React.FC<{ subheading: string }> = ({ subheading }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div
      ref={targetRef}
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
    >
      <motion.p
        style={{ skewX, x }}
        className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase text-white leading-[0.85] md:text-7xl md:leading-[0.85]"
      >
        {subheading}
      </motion.p>
    </div>
  );
};

export default FeaturedPage;
