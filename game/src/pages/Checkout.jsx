import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Checkout.css";

function Checkout() {

  const { state } = useLocation();

  if (!state) {
    return (
      <>
        <Navbar />
        <div className="checkout">
          <h1>No Game Selected</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="checkout">

        <h1>CHECKOUT</h1>

        <div className="checkout-box">

          <div className="billing">

            <h2>Billing Details</h2>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />

            <input type="text" placeholder="Country" />

            <input type="text" placeholder="City" />

            <input type="text" placeholder="ZIP Code" />

          </div>

          <div className="summary">

            <img
              src={state.image}
              alt={state.title}
              className="checkout-image"
            />

            <h2>{state.title}</h2>

            <p>{state.rating}</p>

            <h3>{state.price}</h3>

            <hr />

            <h2>Total : {state.price}</h2>

            <button>
              Confirm Purchase
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default Checkout;