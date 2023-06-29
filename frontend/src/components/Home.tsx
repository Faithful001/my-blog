import { useEffect, useState } from "react";
import axios from "axios";
import BlogDetails from "./BlogDetails";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blogs/")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <div className="section">
        {blogs && <BlogDetails title={"All Blogs"} blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
