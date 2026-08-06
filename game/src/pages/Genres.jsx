import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Genres.css";

import bgVideo from "../assets/bg.mp4";

import adventure from "../assets/adventure.jpg";
import action from "../assets/action.jpg";
import horror from "../assets/horror.jpg";
import sports from "../assets/sports.jpg";
import racing from "../assets/racing.jpg";

function Genres() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="genres-page">

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="genres-video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="genres-overlay"></div>

        {/* Content */}

        <div className="genres-content">

          <h1>CHOOSE YOUR GENRE</h1>

          <p>
            Explore the best games across every category.
          </p>

          <div className="genre-grid">

            <div
              className="genre-card"
              onClick={() => navigate("/adventure")}
            >
              <img src={adventure} alt="Adventure" />

              <div className="genre-overlay-card">
                <h2>Adventure</h2>
              </div>

            </div>

            <div
              className="genre-card"
              onClick={() => navigate("/action")}
            >
              <img src={action} alt="Action" />

              <div className="genre-overlay-card">
                <h2>Action</h2>
              </div>

            </div>

            <div
              className="genre-card"
              onClick={() => navigate("/horror")}
            >
              <img src={horror} alt="Horror" />

              <div className="genre-overlay-card">
                <h2>Horror</h2>
              </div>

            </div>

            <div
              className="genre-card"
              onClick={() => navigate("/sports")}
            >
              <img src={sports} alt="Sports" />

              <div className="genre-overlay-card">
                <h2>Sports</h2>
              </div>

            </div>

            <div
              className="genre-card"
              onClick={() => navigate("/racing")}
            >
              <img src={racing} alt="Racing" />

              <div className="genre-overlay-card">
                <h2>Racing</h2>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Genres;