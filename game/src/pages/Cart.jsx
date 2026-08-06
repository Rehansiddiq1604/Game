import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {

  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <h1>Your Cart is Empty</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="cart-page">

        <h1>SHOPPING CART</h1>

        <div className="cart-card">

          <img
            src={state.image}
            alt={state.title}
          />

          <div className="cart-info">

            <h2>{state.title}</h2>

            <p>{state.rating}</p>

            <h3>{state.price}</h3>

          </div>

        </div>

        <div className="total">

          <h2>Total : {state.price}</h2>

          <button
            onClick={() =>
              navigate("/checkout", { state })
            }
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </>
  );
}

export default Cart;