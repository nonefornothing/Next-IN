import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import Collections from "./pages/collections/Collections";
import SelfDesign from "./pages/selfdesign/SelfDesign";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
  return (
    <div className="Container">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collections" exact component={Collections} />
            <Route path="/self-design" exact component={SelfDesign} />
            <Route path="/testimonials" exact component={Testimonials} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;



