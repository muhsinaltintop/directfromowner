"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  LinkedinIcon,
  TwitterIcon,
  PinterestShareButton,
} from "next-share";

const ShareComponent = ({ link }) => {
  return (
    <div className="flex">
      {console.log(link)}
      <div>
        <FacebookShareButton
          url={`/${link}`}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <PinterestShareButton
        url={`https://directfromowner.vercel.app/properties/${link}`}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <div>
          <PinterestIcon size={32} round />
        </div>
      </PinterestShareButton>
      <div>
        <LinkedinIcon size={32} round />
      </div>
      <div>
        <TwitterIcon size={32} round />
      </div>
    </div>
  );
};

export default ShareComponent;
