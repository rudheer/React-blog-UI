import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Settings from "./pages/home/settings/Settings";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/write">
        <Write />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/post/:postID">
        <Single />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
