import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Adventure from "./pages/Adventure";
import Action from "./pages/Action";
import Horror from "./pages/Horror";
import Sports from "./pages/Sports";
import Racing from "./pages/Racing";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Genres */}
      <Route path="/genres" element={<Genres />} />

      {/* Genre Pages */}
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/action" element={<Action />} />
      <Route path="/horror" element={<Horror />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/racing" element={<Racing />} />

      {/* Game Details */}
      <Route path="/game" element={<GameDetails />} />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />

      {/* Checkout */}
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default App;