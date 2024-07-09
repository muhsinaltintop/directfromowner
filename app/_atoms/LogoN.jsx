import useSWR from "swr";
import { getLogo } from "../_utils/GlobalApi";
import Image from "next/image";

function LogoN() {
  const { data, error, isLoading } = useSWR("getLogo", getLogo);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading logo</div>;
  if (!data) return null;

  const logoUrl = data.map((item) => {
    const url = item?.attributes?.logoImage?.data?.attributes?.url;
    // Assuming the image URL is stored in item.attributes.url
    return (
      <Image
        key={item?.id}
        src={`https://panel.theglobalproperty.co.uk${url}`}
        alt={"alt"}
        width={150}
        height={100}
      />
    );
  });

  return <div>{logoUrl}</div>;
}

export default LogoN;
