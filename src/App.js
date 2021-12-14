/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import Collections from "./pages/collections/Collections";
import SelfDesign from "./pages/selfdesign/SelfDesign";
import Testimonials from "./pages/testimonials/Testimonials";
import InformationService from "./pages/informationservice/InformationService";



const App = () => {

  return (
    <div className="container">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" exact component={Collections} />
        <Route path="/self-design" exact component={SelfDesign} />
        <Route path="/testimonials" exact component={Testimonials} />
        <Route path="/information-service" exact component={InformationService} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;



