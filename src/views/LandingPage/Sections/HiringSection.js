import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import GroupWorkIcon from '@material-ui/icons/GroupWork';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HiringSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={6} sm={6} md={4}>
          <h2 className={classes.title}>One Stop Solution For Every Kind Of Talent Needs</h2>
          <h5 className={classes.description}>
            We Provide a platform connecting companies and entrepreneurs with the right talent for their projects.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Full-Time Hiring"
              description="Divide details about your agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={PeopleAltIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Contract Workers/Freelancers"
              description="Divide details about your agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={PersonIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Remote Teams"
              description="Divide details about your agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={SettingsRemoteIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Bench Strength Managed Projects"
              description="Divide details about your agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={GroupWorkIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
