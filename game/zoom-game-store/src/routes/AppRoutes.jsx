import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/genres" component={Categories} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;