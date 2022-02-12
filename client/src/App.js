import Home from "./components/Home";
import "./components/CreateProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProfile from "./components/CreateProfile";
import Profiles from "./components/Profiles";
import LifePaths from "./components/LifePaths";
import AboutNumerology from "./components/AboutNumerology";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import AuthHeader from "./components/AuthHeader";
import UserProfile from "./components/UserProfile";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">

      <Router>
      {isAuthenticated ? <><AuthHeader/></> : <><Header /></>}
        <Switch>
        <Route path="/CreateProfile" component={CreateProfile} />
          <Route exact path="/" component={Home}>
          <Home/>
          
          </Route>
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/AboutNumerology" component={AboutNumerology} />
          <Route path="/LifePaths" component={LifePaths} />
          <Route path="/Profiles" component={Profiles} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
