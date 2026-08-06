import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import actionVideo from "../assets/action.mp4";

// Game Posters
import gta from "../assets/gta.jpg";
import cyberpunk from "../assets/cyberpunk.jpg";
import spiderman from "../assets/spiderman.jpg";
import wukong from "../assets/wukong.jpg";

// Background Images
import cj from "../assets/cj.jpg";
import punk from "../assets/punk.jpg";
import parker from "../assets/parker.jpg";
import myth from "../assets/myth.jpg";

function Action() {
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
        <source src={actionVideo} type="video/mp4" />
      </video>

      <div className="genre-video-overlay"></div>

      <section className="featured">

        <h2>ACTION GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={gta}
            title="Grand Theft Auto V"
            price="₹1,299"
            rating="★★★★★"
            background={cj}
          />

          <GameCard
            image={cyberpunk}
            title="Cyberpunk 2077"
            price="₹1,999"
            rating="★★★★☆"
            background={punk}
          />

          <GameCard
            image={spiderman}
            title="Marvel's Spider-Man Remastered"
            price="₹3,499"
            rating="★★★★★"
            background={parker}
          />

          <GameCard
            image={wukong}
            title="Black Myth: Wukong"
            price="₹3,999"
            rating="★★★★★"
            background={myth}
          />

        </div>

      </section>
    </>
  );
}

export default Action;