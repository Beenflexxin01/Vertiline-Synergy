import ReactPlayer from "react-player";
import { useRef } from "react";
import punch from "../../Images/punch.png";
import nan from "../../Images/NAN.jpeg";
import guardian from "../../Images/guardian.jpeg";
import nigerian from "../../Images/nigerian.jpeg";
import vanguard from "../../Images/vanguard.jpeg";
import channels from "../../Images/channels.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../UI/Footer";
import news from "../../Images/news.jpg";
const VIDEO_PATH =
  "https://vertilinesynergy.com/wp-content/uploads/2023/08/VID-20230725-WA0012.mp4";
const VIDEO_PATH2 = "https://youtu.be/zKF1pjdBZ0I";

function News() {
  const playerRef = useRef(null);

  return (
    <>
      <div className="hero-position">
        <img src={news} alt="Hero-img" className="hero-img csr-img" />
        <div className="hero inv">
          <h1 className="hero-h2">WE ARE IN THE NEWS</h1>
        </div>
      </div>
      <div className="container">
        <div className="video">
          <ReactPlayer
            ref={playerRef}
            url={VIDEO_PATH}
            controls={true}
            width={"100%"}
            height={"60vh"}
          />
        </div>

        <div className="grid-3 news--grid">
          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img
                src={channels}
                alt="Vanguard Newspaper"
                className="news-img"
              />
              <h3 className="tertiary-header news-head">
                Drama in Lagos 'Hospitality Reunion...'
              </h3>
            </div>
            <div className="vid">
              <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH2}
                controls={true}
                width={"100%"}
                height={"30rem"}
              />
            </div>
          </div>
          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img
                src={vanguard}
                alt="Vanguard Newspaper"
                className="news-img"
              />
              <h3 className="tertiary-header news-head">
                Hospitality Industry Great Asset to Economic Growth - Lagos Firm
              </h3>
            </div>
            <p className="text-description news-desc">
              Vertiline Synergy Limited, a hospitality solutions company, has
              said that the hospitality industry plays a crucial role in
              Nigeria's economic growth.
            </p>
            <button className="btn news-btn">
              <Link
                to="https://www.vanguardngr.com/2023/07/hospitality-industry-great-asset-to-economic-growth-lagos-firm/"
                target="blank"
                className="link">
                Read More
              </Link>
            </button>
          </div>

          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img src={punch} alt="Punch Newspaper" className="news-img" />
              <h3 className="tertiary-header news-head">
                Only 30% of Nigeria's hospitality resources explores -
                Consultant, Fabikun
              </h3>
            </div>
            <p className="text-description news-desc">
              Managing Partner, Vertiline Synergy Limited, Adedoyin Fabikun,
              talks to Emmanuel Ojo, on hospitality business in Nigeria.
            </p>
            <button className="btn news-btn">
              <Link
                to="https://punchng.com/only-30-of-nigerias-hospitality-resources-explored-consultant-fabikun/?amp"
                target="blank"
                className="link">
                Read More
              </Link>
            </button>
          </div>

          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img
                src={guardian}
                alt="The Guardian Newspaper"
                className="news-img"
              />
              <h3 className="tertiary-header news-head">
                Firm announces 2-day hospitality business investment summit
              </h3>
            </div>
            <p className="text-description news-desc">
              Focused on exploring the latest trends, challenges and
              opportunities within the hospitality sector, Vertiline Synergy
              Limited, a leading hospitality consulting company has announced
              its upcoming Hospitality Business and Hospitality Summit that will
              bring together, industry leaders, experts and professionals.
            </p>
            <button className="btn">
              <Link
                to="https://guardian.ng/saturday-magazine/firm-announces-2-day-hospitality-business-investment-summit/"
                target="blank"
                className="link">
                Read More
              </Link>
            </button>
          </div>

          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img src={nan} alt="NAN Newspaper" className="news-img" />
              <h3 className="tertiary-header news-head">
                Vertiline Synergy engages hospitality professionals on industry
                trends, opportunities
              </h3>
            </div>
            <p className="text-description news-desc">
              Ms Adedoyin fABIKUN, managing partner, Vertiline Synergy Limited,
              a hospitality consulting company says Nigeira can compete
              favorably with other countries globally when industry operators
              engage in knowledge sharing activities.
            </p>
            <button className="btn news--btn">
              <Link
                to="https://nannews.ng/2023/06/18/vertiline-synergy-engages-hospitality-professionals-on-industry-trends-opportunities/"
                target="blank"
                className="link">
                Read More
              </Link>
            </button>
          </div>

          <div className="grid-3-cols news-grid">
            <div className="flex">
              <img
                src={nigerian}
                alt="Nigeria News Newspaper"
                className="news-img"
              />
              <h3 className="tertiary-header news-head">
                Vertiline Synergy engages hospitality professionals on industry
                trends, opportunities
              </h3>
            </div>
            <p className="text-description news-desc">
              Ms Adedoyin fABIKUN, managing partner, Vertiline Synergy Limited,
              a hospitality consulting company says Nigeira can compete
              favorably with other countries globally when industry operators
              engage in knowledge sharing activities.
            </p>
            <button className="btn news--btn">
              <Link
                to="https://www.newsheadlines.com.ng/nan-nigeria-news-agency/2023/06/18/vertiline-synergy-engages-hospitality-professionals-on-industry-trends-opportunities/#google_vignette"
                target="blank"
                className="link">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default News;
