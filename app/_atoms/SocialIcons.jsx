import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "next-share";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex">
      <div>
        <FacebookIcon size={32} round />
      </div>
      <div>
        <InstagramIcon size={32} round />
      </div>
      <div>
        <PinterestIcon size={32} round />
      </div>
      <div>
        <LinkedinIcon size={32} round />
      </div>
      <div>
        <TwitterIcon size={32} round />
      </div>
    </div>
  );
};

export default SocialIcons;
