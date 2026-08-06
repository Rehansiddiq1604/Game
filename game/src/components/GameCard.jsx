import { useNavigate } from "react-router-dom";
import "./GameCard.css";

function GameCard({
  image,
  title,
  price,
  rating,
  background
}) {

  const navigate = useNavigate();

  const openGame = () => {

    navigate("/game", {

      state: {
        image,
        title,
        price,
        rating,
        background
      }

    });

  };

  return (

    <div className="game-card">

      <div
        className="game-image"
        onClick={openGame}
      >

        <img
          src={image}
          alt={title}
        />

      </div>

      <div className="game-content">

        <h3>{title}</h3>

        <div className="rating">
          {rating}
        </div>

        <div className="price">
          {price}
        </div>

        <div className="card-buttons">

          <button
            className="buy-btn"
            onClick={openGame}
          >
            Buy Now
          </button>

          <button className="cart-btn">
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  );

}

export default GameCard;