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
                <h2 className={classes.title}>How the Hiring Process Works</h2>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                  <CardBody>
                                    <p className={classes.description}>
                                        1 You tell us your talent requirements. Our Analysis Team connects with you to discuss the requirements and understand your business/idea.
                                    </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <CardBody>
                                    <p className={classes.description}>
                                        2 We shortlist the most suitable candidates from our talent pool. You interview the professionals and choose the ones you find fit for the job.
                                    </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <CardBody>
                                    <p className={classes.description}>
                                        3 We onboard the team you pick. You are all set to start your project!
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
