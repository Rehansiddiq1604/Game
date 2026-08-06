import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import homeVideo from "../assets/rdr2.mp4";

import rdr2 from "../assets/rdr2.jpg";
import gtav from "../assets/gtav.jpg";
import cyberpunk from "../assets/cyberpunk.jpg";
import fc26 from "../assets/fc26.jpg";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="hero">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">

          <span className="tag">NEW RELEASE</span>

          <h1>WELCOME TO ZOOM</h1>

          <p>
            Discover thousands of PC games from every genre.
            Buy the latest releases, explore best sellers,
            and build your gaming library in one place.
          </p>

          <div className="buttons">

            <button
              className="buy-btn"
              onClick={() => navigate("/genres")}
            >
              Browse Games
            </button>

            <button className="wish-btn">
              Wishlist
            </button>

          </div>

        </div>

      </section>

      {/* Popular Games */}

      <section className="featured">

        <h2>POPULAR GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={rdr2}
            title="Red Dead Redemption II"
            price="₹2,499"
            rating="★★★★★"
          />

          <GameCard
            image={gtav}
            title="Grand Theft Auto V"
            price="₹1,299"
            rating="★★★★★"
          />

          <GameCard
            image={cyberpunk}
            title="Cyberpunk 2077"
            price="₹1,999"
            rating="★★★★☆"
          />

          <GameCard
            image={fc26}
            title="EA SPORTS FC 26"
            price="₹3,499"
            rating="★★★★★"
          />

        </div>

      </section>

    </>
  );
}

export default Home;