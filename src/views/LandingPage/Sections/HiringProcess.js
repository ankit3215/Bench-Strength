import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CallIcon from '@material-ui/icons/Call';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TouchAppIcon from '@material-ui/icons/TouchApp';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HiringSection() {
  const classes = useStyles();
  return (
    <div id="hiringprocess">
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>One Stop Solution For Every Kind Of Hiring Needs</h2>
          <h5 className={classes.description}>
            We Provide a platform connecting companies and entrepreneurs with the right talent for their projects.
          </h5>
        </GridItem>
        </GridContainer>
        <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Requirement Analysis"
              description="You tell us your talent requirements. Our Analysis Team connects with you to discuss the requirements and understand your business/idea."
              icon={CallIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Talent Shortlisting"
              description="We shortlist the most suitable candidates from our talent pool. You interview the professionals and choose the ones you find fit for the job."
              icon={GroupAddIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Onboarding"
              description=" We onboard the team you pick. You are all set to start your project!"
              icon={TouchAppIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          
        </GridContainer>
        </div>
      </div>
    </div>
  );
}
