import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMoreOutlined } from "@material-ui/icons";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import '../HomePage/Home.css';
import Data from './data';
import  './Faq.css';

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


const FaqSection = () => {
    const [current, setCurrent] = useState(-1);
    const classes = useStyles();

    const changeState = (panel) => (e, newValue) => {
        setCurrent(newValue ? panel : -1);
    }
    return (
        <>
            <div className="faq__section" id="faq" >
                    <center>
                <Typography className={classes.title} >Frequently Asked Questions</Typography>
                </center>
                <div style={{display:"grid", placeItems:"center"}}>

                {
                    Data?.map(faq =>
                        <div id="accordion">
                            <Accordion expanded={current === faq.id} onChange={changeState(faq.id)}>
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography varient="p" >
                                        <h4 style={{ color: "black" }}> <b>{faq.title}</b></h4>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography varient="p">
                                        <hr /><br />{faq.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                }
                </div>
            </div>
        </>
    )
}
export default FaqSection;