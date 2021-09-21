/*eslint-disable*/
import React,{ useState, useEffect } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-scroll";
import './footer.css';

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(false);
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (

    <footer className={footerClasses}>
      <div className={classes.container}>
       <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              
              <h1>Contact Info</h1>
              <h2>Address</h2>
              <h4>Unit No. 650, 6th Floor,</h4>
              <h4>Tower A, Spaze itech Park,</h4>
              <h4>Sector-49, Sohna Road, Gurgaon.</h4>
              
              <h2>Phone</h2>
              <h4>+91 98666 78787</h4>
              
              <h2>Email</h2>
              infor@orangemantra.com
            
            </ListItem>
          </List>
        </div>
        
        <div className={classes.right}>
        
    <div><h1>SiteMap</h1></div>
    <ul>
      <a className="classes.listitem">
      <Button color="transparent">
            <Link to="hiringsection" className="test1" spy={true} smooth={true}>
              Hiring Needs
            </Link>
          </Button>
          </a>
          <br/>
          
          <a>
          <Button color="transparent">
            <Link to="services" className="test1" spy={true} smooth={true}>
              Our Services
            </Link>
          </Button>
          </a>
          <br/>
         
          <a>
          <Button color="transparent">
            <Link to="team" className="test1" spy={true} smooth={true}>
              Team
            </Link>
          </Button>
          </a>
         
          <br/>
          <a>
          <Button color="transparent">
            <Link to="why" className="test1" spy={true} smooth={true}>
              Why Us?
            </Link>
          </Button>
          </a>
         
          <br/>
          <a>
          <Button color="transparent"> 
            <Link to="testimonials" className="test1" spy={true} smooth={true}>
              Testimonial
            </Link>
          </Button>
          </a>
          
          <br/>
          <a>
          <Button color="transparent"> 
            <Link to="faq" className="test1" spy={true} smooth={true}>
             FAQ's
            </Link>
          </Button>
      </a>
      </ul>
      <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Connect with us on Linkedin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="facebook"
            href="https://www.linkedin.com/company/orange-mantra"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin-in"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/Orangemantraggn"
            target="_blank"
            color="twitter"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="facebook"
            href="https://www.facebook.com/OrangeMantraIndia"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
     
    </List>

        </div>
      
          
      </div>
    </footer>
    
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
