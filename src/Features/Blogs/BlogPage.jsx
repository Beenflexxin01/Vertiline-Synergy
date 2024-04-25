import { useEffect, useState } from "react";
import BlogData from "./BlogData";
import p1 from "../../Images/blog2.jpg";

function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  useEffect(function () {
    async function getBlogData() {
      try {
        const res = await fetch("http://localhost:3000/api/blogs");
        if (!res.ok) {
          throw new Error(
            "Something went wrong while trying to load blog contents ❌❌"
          );
        }
        const data = await res.json();
        if (data.response === "False") {
          throw new Error(
            "Couldn't load data! Kindly check your internet connection or your router port! "
          );
        }
        setBlogData(data);
      } catch (err) {
        console.log(err.message);
      }
    }

    getBlogData();
  }, []);
  return (
    <>
      <div className="hero-position">
        <img src={p1} alt="Hero-img" className=" hos-img" />
        <div className="hero inv">
          <h2 className="hero-h2">BLOG</h2>
        </div>
      </div>
      <div className="container blogs">
        <div className="grid-2">
          {blogData &&
            blogData.map((blogs) => <BlogData blogs={blogs} key={blogs._id} />)}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
