"use client"
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'

const RichTextRenderer = ({data}) => {
  
  return (
    
    <BlocksRenderer
      content={data}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <p className="text-neutral900 max-w-prose mt-2">{children}</p>,
        // ...or point to a design system
        heading: ({ children }) => <h4 className="font-medium text-xl my-4">{children}</h4>,
        

        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link to={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  )
}

export default RichTextRenderer