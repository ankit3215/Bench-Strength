import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';


import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


const useStyles = makeStyles(styles);

export default function FaqSection() {

    const [faq, getFaq] = useState([
        { index: 1, description: 'The development for an Android mobile app depends on what kind of app you need. Apps with basic features and simple design costs less. If you need high-performance app with more advanced features, the cost will be different. We offer competetive pricing for every kind of mobile app.', heading: 'Q1. How mch does it cost to build an Android mobile App?' },
        { index: 2, description: 'An eCommerce developer can do a variety of things depending on your requirements. They primarily develop, customize and maintain eCommerce websites. eCommerce developers are web developers with expertise in various eCommerce development methods and platforms', heading: 'Q2. What does an eCommerce developer do?' },
        { index: 3, description: 'We have a seamless communication process in place for every client. You can reach out to us via email, phone, Microsoft Teams, Skype, Whatsapp etc. Our Customer Support team responds quickly to every query and request.', heading: 'Q3. How does your team maintain communication with international clients?' },
    ]);

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const classes = useStyles();



    return (
        <div id="faq">
        <div className={classes.mainWrapper}>
            <div className={classes.root}>
                <Grid>
                    <h2 className={classes.title}>Frequently asked questions</h2>
                    <div>
                        {faq ? faq.map((item, index) => (
                            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                                <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>{item.heading}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        item.description ? <Typography className={classes.descriptions}>
                                            {item.description}
                                        </Typography> : ''
                                    }
                                </AccordionDetails>
                            </Accordion>

                        )) : ''}
                    </div>
                </Grid>
            </div>
        </div>
        </div>
    )
}

