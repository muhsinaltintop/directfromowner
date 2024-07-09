import Image from "next/image";
import React from "react";
import useSWR from "swr";

const Logo = () => {
  const { data, error, isLoading } = useSWR("getLogo", getLogo);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading logo</div>;
  if (!data) return null;
  return (
    <div>
      {data.map((item) => {
        <Image
          key={item?.id}
          src={`https://panel.theglobalproperty.co.uk${item?.attributes?.logoImage?.data?.attributes?.url}`}
          alt={"alt"}
          width={150}
          height={100}
        />;
      })}
    </div>
  );
};

export default Logo;
