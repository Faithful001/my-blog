import { Link } from "react-router-dom";

interface BlogDetailsProps {
  title: string;
  blogs: any[]; // Change this to whatever data type your blogs array is
}
const BlogDetails = ({ blogs, title }: BlogDetailsProps) => {
  return (
    <div className="blog-details">
      <p className="text-2xl font-bold flex justify-center mt-4 mb-3">
        {title}
      </p>

      {blogs.map((blog: any) => (
        <Link
          to=""
          className="rounded-md bg-slate-100 m-5 p-5 mx-5 lg:mx-48 hover:shadow-md"
          key={blog._id}
        >
          <div className=" mb-5">
            <h1 className="text-2xl font-semibold">{blog.title}</h1>
            <p className="text-xl">{blog.author}</p>
            <p>
              <i>{blog.desc}</i>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogDetails;
