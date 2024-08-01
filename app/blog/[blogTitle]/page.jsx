import Image from "next/image";
import { slugToTitle } from "../../_utils/createSlugFunction";
import { getSingleBlog } from "@/app/_utils/GlobalApi";


const BlogDetails = async ({ params }) => {
  const { blogTitle } = params;
  
  const singleBlogData = await getSingleBlog(slugToTitle(blogTitle))  
  
  if (!singleBlogData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Blog entry not found</h1>
      </div>
    );
  }


  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-8">
          <Image
            src={`https://panel.theglobalproperty.co.uk${singleBlogData[0]?.attributes?.inBodyMedia?.data?.attributes?.url}`}
            alt={singleBlogData[0]?.attributes?.title}
            width={500}
            height={100}
            className="rounded-t-lg m-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{singleBlogData[0]?.attributes?.title}</h1>
          {singleBlogData[0]?.attributes?.body.map((text, index)=> 
            <p key={index} className="text-lg text-gray-700 leading-relaxed mt-2 text-justify">

              {text.children[0].text}
            </p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
