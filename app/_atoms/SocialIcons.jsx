"use client"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "next-share";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex mt-6">
      <div className="mr-4">
        <Link href="https://www.facebook.com/ingiliz.antikalari">
        <FacebookIcon size={32} round />
        </Link>
      </div>
      <div className="mr-4">
        <Link href="https://www.instagram.com/ingiliz.antikalari.emlak">
        <InstagramIcon size={32} round />
        </Link>
      </div>
      <div className="mr-4 text-red-600">
        <Link href="https://www.youtube.com/@TheGlobalPropertyUK">
        <FaYoutube size={32} round />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
