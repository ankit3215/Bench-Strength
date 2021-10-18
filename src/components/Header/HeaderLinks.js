import React, { useState, useEffect } from 'react';
//import { Button } from '../Button/Button';
import { Link } from 'react-scroll';
import './Navbar.css';
import { GiThreeFriends } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import emailjs from 'emailjs-com';
import card from '../Header/card.css'
import Call from "assets/img/Call.png"
import './photo.css'
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Overlay from "components/Overlay/Overlay.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_wjcovvy', 'template_m6d4iyr', e.target, "user_i2COH7mCC1FCA4Bc8liyH")
  .then(res=>console.log(res))
  .catch(err=>console.log(err));
}


function HeaderLinks() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const notify = () => toast("Thanks for Reaching Us! Your Message has been recieved.");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const obj = [
    {
      menu:"Hire Developers",
      ids:"hiringsection",
    },
    {
      menu:"Services",
      ids:"services",
      sub_menu:[
        {ids:"service",subMenu:"Service"},
      ]
    },
    {
      menu:"Teams",
      ids:"team",
    },
    {
      menu:"Why Us",
      ids:"why",
    },
    {
      menu:"Testimonials",
      ids:"testimonials",
    },
    {
      menu:"FAQs",
      ids:"faq",
    },
  ]

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);

  return (
    <>
   
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to="banner" spy={true} smooth={true} className='navbar-logo' onClick={closeMobileMenu}>
              <GridContainer><GridItem  xs={12} sm={12} md={12}><img src={Call} alt="..." className="photo" /></GridItem></GridContainer>
            
          
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {
                obj?.map(item=>
                  <li className='nav-item' style={{cursor:"pointer"}}>
                    <Link to={item?.ids} spy={true} smooth={true} className='nav-links' onClick={closeMobileMenu}>
                      {item?.menu}
                    </Link>
                </li>
                )
              }              
               {/* <li className='nav-btn'>
                {button ? (
                  <Link to="contact" spy={true} smooth={true} className='btn-link'>
                    <Button buttonStyle='btn--outline'>Contact Us</Button>
                  </Link>
                ) : (
                  <Link to="contact" spy={true} smooth={true} className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu} >
                      Contact Us
                    </Button>
                  </Link>
                )}
              </li>  */}
               <li className='nav-btn'>
       <Button
         onClick={() => setStatus(true)}
         variant="outlined"
         color="Secondary"
       >
         Contact&nbsp;Us
       </Button>
       </li>
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
                        <Button type="submit" variant="contained" color="primary" onClick={notify}>Send Message</Button>
                        <ToastContainer />
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
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
      
    </>
  );
}

export default HeaderLinks;
