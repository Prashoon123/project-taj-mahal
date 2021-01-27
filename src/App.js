import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        <Redirect exact from="/" to="/home" />
        <Switch>
          <Route path="/home">
            <Navbar />
            <Home />
          </Route>
          <Route path="/gallery">
            <Navbar />
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
