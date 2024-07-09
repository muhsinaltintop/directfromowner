import Image from "next/image";
import React from "react";
import { getLogo } from "../_utils/GlobalApi";

const Logo = async () => {
  const data = await getLogo();

  return (
    <div>
      {data.map((item, index) => {
        return (
          <Image
            key={item?.id}
            src={`https://panel.theglobalproperty.co.uk${item?.attributes?.logoImage?.data?.attributes?.url}`}
            alt={"alt"}
            width={150}
            height={100}
          />
        );
      })}
    </div>
  );
};

export default Logo;
