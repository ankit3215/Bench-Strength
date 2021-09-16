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
        { index: 1, description: 'abcjkdsnjnfsdkjkvmsdokvmsdk', heading: 'question1' },
        { index: 2, description: 'def', heading: 'question2' },
        { index: 3, description: 'ghi', heading: 'question3' },
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

