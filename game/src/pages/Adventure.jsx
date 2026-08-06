import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import adventureVideo from "../assets/adventure.mp4";

// Game Posters
import rdr from "../assets/rdr.jpg";
import hogwarts from "../assets/hogwarts.jpg";
import ghost from "../assets/ghost.jpg";
import acshadows from "../assets/acshadows.jpg";

// Background Images
import arthur from "../assets/arthur.jpg";
import harry from "../assets/harry.jpg";
import tsushima from "../assets/tsushima.jpg";
import creed from "../assets/creed.jpg";

function Adventure() {
  return (
    <>
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="genre-video"
      >
        <source src={adventureVideo} type="video/mp4" />
      </video>

      <div className="genre-video-overlay"></div>

      <section className="featured">

        <h2>ADVENTURE GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={rdr}
            title="Red Dead Redemption II"
            price="₹2,499"
            rating="★★★★★"
            background={arthur}
          />

          <GameCard
            image={hogwarts}
            title="Hogwarts Legacy"
            price="₹2,799"
            rating="★★★★★"
            background={harry}
          />

          <GameCard
            image={ghost}
            title="Ghost of Tsushima"
            price="₹3,499"
            rating="★★★★★"
            background={tsushima}
          />

          <GameCard
            image={acshadows}
            title="Assassin's Creed Shadows"
            price="₹3,999"
            rating="★★★★☆"
            background={creed}
          />

        </div>

      </section>
    </>
  );
}

export default Adventure;