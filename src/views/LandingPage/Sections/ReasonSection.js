import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Security from "@material-ui/icons/Security";
import Language from "@material-ui/icons/Language";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';
import StorageIcon from '@material-ui/icons/Storage';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ReasonSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why Choose Bench-Strength?</h2>
          <h5 className={classes.description}>
            By choosing Bench-Strength, you get quick access to a 
            pool of tech experts and seasoned IT Professionals.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Action Ready Talent"
              description="With a ready-to-deploy pool of resources specializing in different areas of softwars, IT, and emerging tech."
              icon={ShoppingCart}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="No wait times"
              description="We help you bypass the notice periods and wait times and quickly line up skilled resources per your requirements."
              icon={Security}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Project-specific expertise"
              description="You can choose project-specific experts from a list of hand-picked professionals having years of experience"
              icon={Language}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Process-driven approach"
              description="Whether it's software development, web design, or tech support, we follow a predefined process for everything"
              icon={PhoneIphoneIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Comprehensive expertise"
              description="Our softwaare & IT experience spans virtually all major industries, traditional and emerging alike."
              icon={ScreenLockPortraitIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Global clients"
              description="By choosing skilled resources from us, you give your business exposure to the global tech market."
              icon={StorageIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
