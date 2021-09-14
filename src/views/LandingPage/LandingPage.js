import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import HiringSection from "./Sections/HiringSection.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import ReasonSection from "./Sections/ReasonSection.js";
import FaqSection from "./Sections/FaqSection";
import TestimonialSection from "./Sections/TestimonialSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/Banner.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>IT Staff Augmentation & Digital Transformation Services</h1>
              <h4>
               We speed up your hiring process for technology projects by quickly deploying top professionals per your specific needs.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HiringSection />
          <ProductSection />
          <TeamSection />
          <ReasonSection />
          <TestimonialSection/>
          <FaqSection/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
