import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Login from "../src/pages/login";
import Home from "../src/pages/home";
import GroupView from "../src/pages/group_view";
import Profile from "../src/pages/profile";
import ProfileList from "../src/pages/profileList";

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
        <Route path="/:id/profiles" children={<ProfileList />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
