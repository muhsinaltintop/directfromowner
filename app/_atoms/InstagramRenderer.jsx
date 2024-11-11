"use client"
import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramRenderer = ({data}) => {
  return (
    data.map((instagram, index) => {
        // console.log("ig:", instagram.attributes.Link);
        return (<div key={index} style={{ display: 'flex', justifyContent: 'center', border: "black", borderRadius: "20%" }}>
  <InstagramEmbed url={instagram.attributes.Link} width={328} />
</div>)
        
    })
  )
}

export default InstagramRenderer