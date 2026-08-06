import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../App.css";

import racingVideo from "../assets/racing.mp4";

// Game Posters
import forza from "../assets/forza.jpg";
import nfs from "../assets/nfs.jpg";
import f1 from "../assets/f1.jpg";
import assetto from "../assets/assetto.jpg";

// Background Images
import horizon from "../assets/horizon.jpg";
import need from "../assets/need.jpg";
import formula from "../assets/formula.jpg";
import corsa from "../assets/corsa.jpg";

function Racing() {
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
        <source src={racingVideo} type="video/mp4" />
      </video>

      <div className="genre-video-overlay"></div>

      <section className="featured">

        <h2>RACING GAMES</h2>

        <div className="games-grid">

          <GameCard
            image={forza}
            title="Forza Horizon 5"
            price="₹3,499"
            rating="★★★★★"
            background={horizon}
          />

          <GameCard
            image={nfs}
            title="Need for Speed Unbound"
            price="₹2,999"
            rating="★★★★☆"
            background={need}
          />

          <GameCard
            image={f1}
            title="F1 25"
            price="₹3,999"
            rating="★★★★★"
            background={formula}
          />

          <GameCard
            image={assetto}
            title="Assetto Corsa EVO"
            price="₹2,499"
            rating="★★★★☆"
            background={corsa}
          />

        </div>

      </section>
    </>
  );
}

export default Racing;