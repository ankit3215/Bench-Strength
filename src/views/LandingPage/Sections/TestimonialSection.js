import React,{useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
  root: {
    color:"#000000",
    minWidth: 275,
    maxHeight: 220,
    borderRadius:"5%"

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


export default function TestimonalSection() {

  // const [testimonials,setTestimonals] = useState([
  //   {header:"",body:"Our long search for a skilled Magento developer's team ended at Bench Strength. The team built a completely flawless eCommerce website. Being an FMCG company, we needed the site to have diverse features and product listing capabilities.", footer:"-MD at an FMCG company"},
  //   {header:"",body:"We had to ramp up the online food delivery during the pandemic-induced lockdowns. We needed a chatbot that can take orders and reduce our dependence on manual processes . Bench Strength's chatbot developers efficiently all our requirements.", footer:"-Co-owner of restaurant chain in Delhi-NCR"},
  //   {header:"",body:"We hired a mobile app team to build an all-in-one app for automobile parts, services and customer support. The app made our products more easily accessible and significantly improved our customer service.", footer:"-CTO of a leading automobile parts companys"}
  // ])

  const classes = useStyles();
  return (
    <div id="testimonials">
      <div className={classes.section}>
        <center>
          <h2 className={classes.title}>Client Testimonials</h2>
        </center>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent style={{backgroundColor: "white"}}>
                  <Typography className={classes.pos} color="textSecondary">
                    "Our long search for a skilled Magento developer's team
                    ended at Bench Strength. The team built a completely
                    flawless eCommerce website. Being an FMCG company, we needed
                    the site to have diverse features and product listing
                    capabilities."
                 
                    <br />- MD at an FMCG company
                    <br />
                    <br />
                    <br/>
                    <br/>
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent style={{backgroundColor: "white"}}>
                  <Typography className={classes.pos} color="textSecondary">
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
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent style={{backgroundColor: "white"}}>
                  <Typography className={classes.pos} color="textSecondary">
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
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}