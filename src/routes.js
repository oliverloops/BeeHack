import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Login from "../src/pages/login";
import Home from "../src/pages/home";
import GroupView from "../src/pages/group_view";
import Profile from "../src/pages/profile";

//Context API
import { AppContext } from "./App";

const AllRoutes = () => {
  const consumer = useContext(AppContext);

  return (
    <Router>
      <Switch>
        {/* Añadir mas rutas aquí */}
        <Route
          path="/group/:id"
          render={({ match }) => (
            <GroupView
              data={consumer.content.find((i) => i.id === match.params.id)}
            />
          )}
        />
        <Route path="/profile">
          <Profile />
        </Route>
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
