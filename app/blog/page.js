import Link from "next/link";
import data from "../../public/_mocks/blogs.json";
import Image from "next/image";

const Blog = async () => {
  return (
    <div className="flex justify-center items-center max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl my-4">Blogs&News</h2>
        <div className="flex flex-wrap items-center gap-5">
          {data.map((post, index) => (
            <div
              key={index}
              className="flex flex-wrap overflow-hidden rounded-lg shadow transition hover:shadow-lg p-8 justify-center items-center w-96 h-122 mx-auto"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col items-center">
                <Image
                  src="/blue-house.jpg"
                  alt="/blue-house.jpg"
                  width={270}
                  height={100}
                  className="rounded-t-lg"
                />
                <h3 className="mt-0.5 text-base md:text-lg text-gray-900">
                  {post?.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {post?.text}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
