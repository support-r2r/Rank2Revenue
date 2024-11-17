"use client";
import { motion } from "framer-motion";
import {
  SiShopify,
  SiZoho,
  SiGoogle,
  SiMailchimp,
  SiSquarespace,
  SiGodaddy,
  SiMeta,
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiCloudflare,
} from "react-icons/si";
import { ReactNode } from "react";

const Partners = () => {
  return (
    <section className="bg-white pb-12">
      {/* Single row of logos */}  
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
          {/* Repeating the logos for an endless scroll effect */}
          <LogoItems />
        </TranslateWrapper>
      </div>
    </section>
  );
};

interface TranslateWrapperProps {
  children: ReactNode;
}

const TranslateWrapper = ({ children }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: React.ElementType }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItems = () => (
  <>
    <LogoItem Icon={SiShopify} />
    <LogoItem Icon={SiZoho} />
    <LogoItem Icon={SiGoogle} />
    <LogoItem Icon={SiMailchimp} />
    <LogoItem Icon={SiSquarespace} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiMeta} />
    <LogoItem Icon={SiInstagram} />
    <LogoItem Icon={SiFacebook} />
    <LogoItem Icon={SiLinkedin} />
    <LogoItem Icon={SiCloudflare} />
    {/* Repeating Cloudflare and Google logos for emphasis */}
    <LogoItem Icon={SiGoogle} />
    <LogoItem Icon={SiCloudflare} />
  </>
);

export default Partners;
