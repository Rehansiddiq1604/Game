import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import sportsVideo from "../assets/sports.mp4";

// Game Posters
import fc26 from "../assets/fc26.jpg";
import cricket from "../assets/cricket.jpg";
import nba from "../assets/nba.jpg";
import wwe from "../assets/wwe.jpg";

// Background Images
import pes from "../assets/pes.jpg";
import cricket24 from "../assets/cricket24.jpg";
import basket from "../assets/basket.jpg";
import wrestle from "../assets/wrestle.jpg";

function Sports() {
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
        <source src={sportsVideo} type="video/mp4" />
      </video>

      <div className="genre-video-overlay"></div>

      <section className="featured">

        <h2>SPORTS GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={fc26}
            title="EA SPORTS FC 26"
            price="₹3,999"
            rating="★★★★★"
            background={pes}
          />

          <GameCard
            image={cricket}
            title="Cricket 24"
            price="₹2,499"
            rating="★★★★☆"
            background={cricket24}
          />

          <GameCard
            image={nba}
            title="NBA 2K25"
            price="₹3,499"
            rating="★★★★★"
            background={basket}
          />

          <GameCard
            image={wwe}
            title="WWE 2K25"
            price="₹3,299"
            rating="★★★★☆"
            background={wrestle}
          />

        </div>

      </section>

    </>
  );
}

export default Sports;