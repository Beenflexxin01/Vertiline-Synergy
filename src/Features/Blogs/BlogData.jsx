import { useNavigate } from "react-router-dom";

function BlogData({ blogs }) {
  const navigate = useNavigate();
  const { _id: blogId } = blogs;
  return (
    <>
      <div className="container">
        <h2 className="secondary-header blog-header">{blogs.title}</h2>

        <div className="flex">
          <h5 className="creche blog-header">{blogs.author}</h5>
          <h5 className="creche ">{blogs.year}</h5>
        </div>

        <p className="text-description min-txt">{blogs.minText}</p>
        <button
          className="btn"
          onClick={() => navigate(`/media/blogContent/${blogId}`)}>
          Read More &rarr;
        </button>
      </div>
    </>
  );
}

export default BlogData;
