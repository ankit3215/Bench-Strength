import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";

import testimonial from "./testimonial.css";

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};


const useStyles = makeStyles({
  section: {
    padding: "5px 0",
  },
  container:{
    
    "@media (min-width: 12000px)": {
      maxWidth: "11400px",
    },
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  root: {
    color:"#000000",
    minWidth: 275,
    maxHeight: 240,

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 30,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#e65100",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "0",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  pos: {
    marginBottom: 12,
    fontFamily: "Studz"
  },
});

export default function TestimonialSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section} id="testimonials">
       <center>
          <h2 className={classes.title}>Client Testimonals</h2>
        </center>
        <center>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div className="head-text">
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="text-on-image">
                  <h4 className={classes.pos}>
                    "Our long search for a skilled Magento developer's team
                    ended at Bench Strength. The team built a completely
                    flawless eCommerce website. Being an FMCG company, we needed
                    the site to have diverse features and product listing
                    capabilities."
                    <br />
                    <br />- MD at an FMCG company
                    <br />
                    <br />
                    <br/>
                    <br/>
                    </h4>
                  </div>
                </div>
                <div className="head-text">
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="text-on-image">
                    <h4 className={classes.pos}>
                      
                    "We had to ramp up the online food delivery during the
                    pandemic-induced lockdowns. We needed a chatbot that can
                    take orders and reduce our dependence on manual processes .
                    Bnech Strength's chatbot developers efficiently all our
                    requirements."
                    <br />
                    <br />
                    
                    -Co-owner of restaurant chain in Delhi-NCR
                    <br />
                    <br />
                    <br/>
                    <br/>
                    </h4>
                  </div>
                </div>
                <div className="head-text">
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="text-on-image">
                  <h4 className={classes.pos}>
                    "We hired a mobile app team to build an all-in-one app for
                    automobile parts, services and customer support. The app
                    made our products more easily accessible and significantly
                    improved our customer service."
                    <br />
                    <br />
                    
                    -CTO of a leading automobile parts company
                    <br />
                    <br />
                    <br/>
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      </center>
    </div>
  );
}
