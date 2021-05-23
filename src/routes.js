import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Login from "../src/pages/login";
import Home from "../src/pages/home";
import GroupView from "../src/pages/group_view";
import ProfileList from '../src/pages/profileList';

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Añadir mas rutas aquí */}
        <Route path="/group/:id/profiles" children={<ProfileList />} />
        <Route path="/group/:id" children={<GroupView />} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
