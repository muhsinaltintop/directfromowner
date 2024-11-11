
import React from 'react'
import { getInstagramPhoto } from '../_utils/GlobalApi';
import InstagramRenderer from '../_atoms/InstagramRenderer'

const InstagramComponent = async () => {
    const data = await getInstagramPhoto();
  return (
    <div className='text-center'>

        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl my-4 mb-10">
          Property Posts
        </h2>
    <div className='grid grid-cols-4 justify-around'>

        <InstagramRenderer data={data}/>
        
    </div>
    </div>
  )
}

export default InstagramComponent