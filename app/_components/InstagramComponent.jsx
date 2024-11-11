
import React from 'react'
import { getInstagramPhoto } from '../_utils/GlobalApi';
import Image from 'next/image';

const InstagramComponent = async () => {
    const data = await getInstagramPhoto();
  return (
    <div className='flex justify-around'>

        {data.map((photo) => (
          
          photo.attributes.image.data.map((partner, index)=> {
            return <Image key={index} alt='image' src={`https://panel.theglobalproperty.co.uk${partner.attributes.url}`}
            width={200} height={300}/>            
          })           
        )
        )}

        
    </div>
  )
}

export default InstagramComponent