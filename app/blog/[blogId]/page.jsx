import data from '../../../public/_mocks/blogs.json';

const BlogDetails = async ({ params }) => {
  const { blogId } = params;
  
  const blogPost = data.find(post => post.id.toString() === blogId);

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Blog girdisi bulunamadı</h1>
      </div>
    );
  }

  const { subtitle, text } = blogPost;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {subtitle}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;