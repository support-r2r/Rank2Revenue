"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiShopify,
  SiZoho,
  SiMailchimp,
  SiSquarespace,
  SiGodaddy,
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiCloudflare,
  SiYoutube,
  SiTiktok,
  SiHubspot,
  SiSalesforce,
  SiSlack,
  SiAdobe,
  SiWordpress,
  SiPinterest,
  SiReddit,
  SiSnapchat,
  SiCanva,
  SiFigma,
  SiGoogleanalytics,
  SiSemrush,
} from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Imported FcGoogle
import { IconType } from "react-icons";

interface TranslateWrapperProps {
  children: React.ReactNode;
}

const TranslateWrapper: React.FC<TranslateWrapperProps> = ({ children }) => {
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

interface LogoItemProps {
  Icon: IconType;
  label: string;
  color?: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ Icon, label, color }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-20 md:h-28 flex flex-col justify-center items-center hover:bg-slate-200 transition-colors"
    >
      <Icon size="2.5rem" color={color} />
      <span className="text-sm md:text-base mt-1">{label}</span>
    </a>
  );
};

const LogoItemsTop: React.FC = () => (
  <>
    <LogoItem Icon={SiShopify} label="Shopify" color="#95BF47" />
    <LogoItem Icon={SiZoho} label="Zoho" color="#D60229" />
    <LogoItem Icon={FcGoogle} label="Google" /> {/* Updated to FcGoogle */}
    <LogoItem Icon={SiMailchimp} label="Mailchimp" color="#FFE01B" />
    <LogoItem Icon={SiSquarespace} label="Squarespace" color="#222222" />
    <LogoItem Icon={SiGodaddy} label="GoDaddy" color="#1BDBDB" />
    <LogoItem Icon={SiInstagram} label="Instagram" color="#E4405F" />
    <LogoItem Icon={SiFacebook} label="Facebook" color="#1877F2" />
    <LogoItem Icon={SiLinkedin} label="LinkedIn" color="#0077B5" />
    <LogoItem Icon={SiCloudflare} label="Cloudflare" color="#F38020" />
    <LogoItem Icon={SiYoutube} label="YouTube" color="#FF0000" />
    <LogoItem Icon={SiTiktok} label="TikTok" color="#000000" />
    <LogoItem Icon={SiHubspot} label="HubSpot" color="#FF7A59" />
    <LogoItem Icon={SiSalesforce} label="Salesforce" color="#00A1E0" />
    <LogoItem Icon={SiSlack} label="Slack" color="#4A154B" />
    <LogoItem Icon={SiAdobe} label="Adobe" color="#FF0000" />
    <LogoItem Icon={SiWordpress} label="WordPress" color="#21759B" />
    <LogoItem Icon={FaTwitterSquare} label="Twitter" color="#1DA1F2" />
    <LogoItem Icon={SiPinterest} label="Pinterest" color="#E60023" />
    <LogoItem Icon={SiReddit} label="Reddit" color="#FF4500" />
    <LogoItem Icon={SiSnapchat} label="Snapchat" color="#FFFC00" />
    <LogoItem Icon={SiCanva} label="Canva" color="#00C4CC" />
    <LogoItem Icon={SiFigma} label="Figma" color="#F24E1E" />
    <LogoItem Icon={SiGoogleanalytics} label="Google Analytics" color="#E37400" />
    <LogoItem Icon={SiSemrush} label="SEMrush" color="#EB7000" />
  </>
);

const Partners: React.FC = () => {
  return (
    <section className="bg-white py-4">
      <div className="flex overflow-hidden px-8 sm:px-12 lg:px-16"> {/* Increased padding */}
      <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
    </section>
  );
};

export default Partners;
