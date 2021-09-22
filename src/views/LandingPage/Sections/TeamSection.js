import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";

// importing images for faces
import Java from "assets/img/faces/Java.jpg";
import ios from "assets/img/faces/IOS.jpg";
import eCommerce from "assets/img/faces/eCommerce.jpg";
import magento from "assets/img/faces/Magento.png";
import shopify from "assets/img/faces/Shopify.jpg";
import web from "assets/img/faces/Web.png";
import wordpress from "assets/img/faces/Wordpress.png";
import chatbot from "assets/img/faces/Chatbot.png";
import project from "assets/img/faces/Project.jpg";




const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div id="team">
    <div className={classes.section}>
      <h2 className={classes.title}>Tech Experts For Every Kind Of Requirement</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={Java} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Android App Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Impressively skilled, noticeably creative, and highly experienced software developers for all your mobile app requirements.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={ios} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              iOS App Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Choose iOS app experts from a team of hand-picked app developers with years of experience across industry verticals.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={eCommerce} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              eCommerce Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Exceptionally skilled, noticeably experienced, and uncompromisingly professional eCommerce developers to choose from.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={magento} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Magento Developer
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Certified and experienced Magento developers who meet all your eCommerce needs and ensure flawless user experiences.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={shopify} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Shopify Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Power up your online business using the skills of industry-best Shopify developers having diverse experiences in eCommerce.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
                <img src={web} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Web Designers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Exceptionally creative web designers to ensure a captivating digital presence of your business by creating engaging features.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={wordpress} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              WordPress Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Experienced developers with masterful programming skills, prompt communication abilities, and out-of-the-box thinking.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={11} className={classes.itemGrid}>
                <img src={chatbot} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Chatbot Developers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Getting the desired ROI from a chatbot requires expertise. That’s why you need to hire chatbot developers with the right skills.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={project} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Project Managers
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                Hire seasoned project managers with exceptional problem-solving skills, and a knack for cutting-edge digital technologies.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    </div>
  );
}
