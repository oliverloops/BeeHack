import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Login from "../src/pages/login";
import Home from "../src/pages/home";
import GroupView from "../src/pages/group_view";

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Añadir mas rutas aquí */}
        <Route path="/group/:id" children={<GroupView />} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AllRoutes;
