
import React from 'react'
import { getPartners } from '../_utils/GlobalApi';
import Image from 'next/image';

const Partners = async () => {
    const data = await getPartners();
  return (
    <div className="grid grid-cols-5 gap-1 place-items-center">
  {data.map((partners) =>
    partners.attributes.PartnerLogo.data.map((partner, index) => {
      return (
        <div key={index} className="flex items-center justify-center">
          <Image
            alt="image"
            src={`https://panel.theglobalproperty.co.uk${partner.attributes.url}`}
            width={300}
            height={300}
          />
        </div>
      );
    })
  )}
</div>


  )
}

export default Partners