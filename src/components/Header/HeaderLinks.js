/*eslint-disable*/
import React, { useState, useEffect } from "react";
// react components for routing our app without refresh

import emailjs from 'emailjs-com';

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
//import card from "components/Header/card.css";

const useStyles = makeStyles(styles);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_wjcovvy', 'template_m6d4iyr', e.target, "user_i2COH7mCC1FCA4Bc8liyH")
  .then(res=>console.log(res))
  .catch(err=>console.log(err));
}



export default function HeaderLinks(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(false);


  return (
    <>
      <GridContainer>
        <flex>
          <Button variant="Link" color="primary">
            <Link to="hiringsection" spy={true} smooth={true}>
              Hiring Section
            </Link>
          </Button>
        </flex>
        <flex>
          <Button variant="Link">
            <Link to="services" spy={true} smooth={true}>
              Our Services
            </Link>
          </Button>
        </flex>
        <flex>
          <Button variant="Link">
            <Link to="team" spy={true} smooth={true}>
              Team
            </Link>
          </Button>
        </flex>
        <flex>
          <Button variant="Link">
            <Link to="why" spy={true} smooth={true}>
              Why Us?
            </Link>
          </Button>
        </flex>
        <flex>
          <Button variant="Link">
            <Link to="testimonials" spy={true} smooth={true}>
              Testimonials
            </Link>
          </Button>
        </flex>
        <flex>
          <Button variant="Link">
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
                  <form onSubmit={sendEmail}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Name/Company Name"
                          id="name"
                          name="name"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                     
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Email/Business Email"
                          id="email"
                          name="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                       
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Your Phone Number"
                          id="phone"
                          name="phone"
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
                          name="company"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
              
                      </GridItem>
                      <GridItem xs={12} sm={12} md={11}>
                        <CustomInput
                          labelText="Your Message"
                          id="message"
                          name="message"
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
                        <Button type="submit" variant="contained" color="primary">Send Message</Button>
                        {/* <input type="submit" value="send"/> */}
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
