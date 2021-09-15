import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

import LandingPage from "views/LandingPage/LandingPage.js";
import TestimonalSection from "views/LandingPage/Sections/TestimonialSection";
import TeamSection from "views/LandingPage/Sections/TeamSection";
import ReasonSection from "views/LandingPage/Sections/ReasonSection";
import FaqSection from "views/LandingPage/Sections/FaqSection";
import HiringSection from "views/LandingPage/Sections/HiringSection";
import ProductSection from "views/LandingPage/Sections/ProductSection";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    
    <Switch>
    
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/hiring" component={HiringSection}/>
      <Route exact path="/services" component={ProductSection}/>
      <Route exact path="/team" component={TeamSection}/>
      <Route exact path="/whyUs" component={ReasonSection}/>
      <Route exact path="/testimonals" component={TestimonalSection}/>
      <Route exact path="/faq" component={FaqSection}/>
       
    </Switch>
    
  </Router>,
  document.getElementById("root")
);
