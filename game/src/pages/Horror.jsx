import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import horrorVideo from "../assets/horror.mp4";

// Game Posters
import lastofus from "../assets/outlast.jpg";
import silenthill from "../assets/silenthill2.jpg";
import re4 from "../assets/re4.jpg";
import phasmophobia from "../assets/phasmophobia.jpg";

// Background Images
import last from "../assets/last.jpg";
import hill from "../assets/hill.jpg";
import evil from "../assets/evil.jpg";
import moon from "../assets/moon.jpg";

function Horror() {
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
        <source src={horrorVideo} type="video/mp4" />
      </video>

      <div className="genre-video-overlay"></div>

      <section className="featured">

        <h2>HORROR GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={lastofus}
            title="The Last of Us Part I"
            price="₹2,999"
            rating="★★★★★"
            background={last}
          />

          <GameCard
            image={silenthill}
            title="Silent Hill 2"
            price="₹3,499"
            rating="★★★★★"
            background={hill}
          />

          <GameCard
            image={re4}
            title="Resident Evil 4"
            price="₹2,499"
            rating="★★★★★"
            background={evil}
          />

          <GameCard
            image={phasmophobia}
            title="Phasmophobia"
            price="₹799"
            rating="★★★★☆"
            background={moon}
          />

        </div>

      </section>

    </>
  );
}

export default Horror;