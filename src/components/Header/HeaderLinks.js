/*eslint-disable*/
import React, { useState, useEffect } from "react";
// react components for routing our app without refresh

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Overlay from "components/Overlay/Overlay.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";


import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import card from "components/Header/card.css";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [status, setStatus] = useState(false);

  return (
    <>
    <GridContainer>
    <flex>
      <Button variant="Link" color="Secondary">
        <Link to="hiringsection" spy={true} smooth={true}>
          Hiring Section
        </Link>
      </Button>
      </flex>
      <flex>
      <Button variant="Link" color="Secondary">
        <Link to="services" spy={true} smooth={true}>
          Our Services
        </Link>
      </Button>
      </flex>
      <flex>
      <Button variant="Link" color="Secondary">
        <Link to="team" spy={true} smooth={true}>
          Team
        </Link>
      </Button>
      </flex>
      <flex>
      <Button variant="Link" color="Secondary">
        <Link to="why" spy={true} smooth={true}>
          Why Us?
        </Link>
      </Button>
      </flex>
      <flex>
      <Button variant="Link" color="Secondary">
        <Link to="testimonials" spy={true} smooth={true}>
          Testimonials
        </Link>
      </Button>
      </flex>
      <flex>
      <Button variant="Link" color="Secondary">
        <Link to="faq" spy={true} smooth={true}>
          FAQs
        </Link>
      </Button>
      </flex>
      <flex>
      <Button
        onClick={() => setStatus(true)}
        variant="outlined"
        color="Secondary"
      >
        Contact Us
      </Button>
      </flex>
      </GridContainer>

      <Overlay status={status} onClose={() => setStatus(false)}>
        <Card className="card">
          <CardBody className="card">
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                  <h2 className={classes.title}>Work with us</h2>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Name/Company Name"
                          id="name"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Email/Business Email"
                          id="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Phone Number"
                          id="phone"
                          type="integer"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Company/Organization"
                          id="company"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={11}>
                        <CustomInput
                          labelText="Your Message"
                          id="message"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.textArea,
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <Button color="primary">Send Message</Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </GridItem>
              </GridContainer>
            </div>
          </CardBody>
        </Card>
      </Overlay>
    </>
  );
}
