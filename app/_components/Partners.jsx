
import React from 'react'
import { getPartners } from '../_utils/GlobalApi';
import Image from 'next/image';

const Partners = async () => {
    const data = await getPartners();
  return (
    <div className='flex justify-around'>

        {data.map((partners) => (
          
          partners.attributes.PartnerLogo.data.map((partner, index)=> {
            return <Image key={index} alt='image' src={`https://panel.theglobalproperty.co.uk${partner.attributes.url}`}
            width={200} height={300}/>            
          })           
        )
        )}

        
    </div>
  )
}

export default Partners