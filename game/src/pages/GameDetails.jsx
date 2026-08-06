import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./GameDetails.css";

function GameDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "120px", color: "white" }}>
          <h1>Game Not Found</h1>
        </div>
      </>
    );
  }

  const {
    image,
    title,
    price,
    rating,
    background
  } = location.state;

  return (
    <>
      <Navbar />

      <div
        className="details-page"
        style={{
          backgroundImage: `url(${background})`
        }}
      >

        {/* Dark Overlay */}
        <div className="details-overlay"></div>

        <div className="details-container">

          <div className="details-image">

            <img
              src={image}
              alt={title}
            />

          </div>

          <div className="details-info">

            <h1>{title}</h1>

            <div className="rating">
              {rating}
            </div>

            <div className="price">
              {price}
            </div>

            <p className="description">
              Experience one of the greatest games ever made with
              stunning graphics, immersive gameplay and an unforgettable
              storyline.
            </p>

            <div className="info-box">

              <p><strong>Developer:</strong> Rockstar Games</p>

              <p><strong>Publisher:</strong> Rockstar Games</p>

              <p><strong>Platform:</strong> PC</p>

              <p><strong>Genre:</strong> Adventure / Action</p>

            </div>

            <div className="detail-buttons">

              <button
                className="buy-btn"
                onClick={() => navigate("/checkout")}
              >
                Buy Now
              </button>

              <button
                className="cart-btn"
                onClick={() => navigate("/cart")}
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default GameDetails;