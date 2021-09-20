import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import PaymentIcon from '@material-ui/icons/Payment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import WebIcon from '@material-ui/icons/Web';
import WifiIcon from '@material-ui/icons/Wifi';
import BusinessIcon from '@material-ui/icons/Business';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AirplayIcon from '@material-ui/icons/Airplay';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div id="services">
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>A Wide Range of Digital Transformation & It Services</h2>
            <h5 className={classes.description}>
              Whether you’re an SME owner looking for cost-efficient digitization services or an enterprise CXO needing custom software, we cover everything.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea

                title="Custom Mobile Apps"
                description="From design to deployment of a mobile app for your business, we guide you throughout the journey. Our creative designers and tech enthusiasts work in collaboration to help you."
                icon={MobileFriendlyIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Digital Payment Solutions"
                description="We closely watch the rapidly changing arena of digital payment technologies. With our insights and specialization, you can use the most efficient technologies to your advantage."
                icon={PaymentIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="eCommerce Platform Development"
                description="Being one of the pioneers in eCommerce, we know what suits your business best. Our expertise is built on years of diverse experience in design, development, and technical support."
                icon={BusinessCenterIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea

                title="Custom Website Development"
                description="The scopes of a website extend much beyond just the ‘digital presence’ of your business. We help you explore the limitless digital space using an advanced website designed for engagement."
                icon={WebIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Remote Work Management"
                description="With our consulting, you can easily plan a remote work model and implement it. Having a remote working infrastructure makes you prepared for any potential disaster and unforeseen situations."
                icon={WifiIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Business Automation Solutions"
                description="We swiftly develop software solutions that help you efficiently incorporate automation into business by implementing AI, ML, & chatbots, and other emerging technologies."
                icon={BusinessIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea

                title="Enterprise Solutions Development"
                description="We enable businesses to leverage the most evolved breed of software. With cutting-edge tech and highly experienced programmers, we deliver unmatched software applications."
                icon={FilterCenterFocusIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Digital Transformation Consulting"
                description="We figure out tech solutions and software tools that would be the most suitable for the client. Our consultants also make sure the technologies you adopt are bring the desired ROI."
                icon={ContactPhoneIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Emerging Tech Solutions"
                description="With industry-best tools and technologies, we power you to quickly catch up with the shifting market trends using an array of customer-focused features for your business."
                icon={AirplayIcon}
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