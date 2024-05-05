import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../UI/Footer";
import Loader from "../../UI/Loader";
import BackendLink from '../../utils/BackendLink'
function BlogContent() {
  const [isLoading, setIsLoading] = useState();
  const [blogDetails, setBlogDetails] = useState({});
  const { id } = useParams();

  const {
    title,
    blogDescription,
    economicHead,
    economicText,
    culturalHead,
    culturalText,
    empoweringHead,
    empoweringText,
    bigFamilyHead,
    bigFamilyText,
    topic,
    topic1,
    who,
    whoText,
    topics,
    keyNote,
    keyTopic,
    topic2,
    topic3,
    topic4,
    topic5,
    topic6,
    topic7,
    topic8,
    topic9,
    topic10,
    topic11,
  } = blogDetails;

  useEffect(
    function () {
      async function getBlogDetails() {
        try {
          const res = await fetch(`${BackendLink}/api/blogs/${id}`);
          if (!res.ok)
            throw new Error(
              "Something went wrong while trying to load blog contents"
            );

          const data = await res.json();
          if (data.Response === "False")
            throw new Error(
              "Unable to fetch blog data's! Kindly check your internet connetion."
            );
          setBlogDetails(data);

          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }
      getBlogDetails();
    },
    [id]
  );
  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="container  csr">
              <div className="blog-content">
                <h2 className="secondary-header">{title}</h2>
                <p className="text-description">{blogDescription}</p>
                <h4 className="blogss">{economicHead}</h4>
                <p className="text-description">{economicText}</p>
                <h4 className="blogss">{culturalHead}</h4>
                <p className="text-description">{culturalText}</p>
                <h4 className="blogss">{empoweringHead}</h4>
                <p className="text-description">{empoweringText}</p>
                <h4 className="blogss">{bigFamilyHead}</h4>
                <p className="text-description">{bigFamilyText}</p>
                <li className="text-description  topic">{topic}</li>
                <li className="text-description  topic">{topic1}</li>
                <h3 className="tertiary-header who">{who}</h3>
                <p className="text-description">{whoText}</p>
                <h4 className="tertiary-header top">{topics}</h4>
                <div className="key">
                  <p className="text-description key">{keyNote}</p>
                  <p className="text-description topic-desc">{keyTopic}</p>
                </div>
                <div className="topics">
                  <p className="text-description topic-desc">{topic2}</p>
                  <p className="text-description topic-desc">{topic3}</p>
                  <p className="text-description topic-desc">{topic4}</p>
                  <p className="text-description topic-desc">{topic5}</p>
                  <p className="text-description topic-desc">{topic6}</p>
                  <p className="text-description topic-desc">{topic7}</p>
                  <p className="text-description topic-desc">{topic8}</p>
                  <p className="text-description topic-desc">{topic9}</p>
                  <p className="text-description topic-desc">{topic10}</p>
                  <p className="text-description topic-desc">{topic11}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BlogContent;
