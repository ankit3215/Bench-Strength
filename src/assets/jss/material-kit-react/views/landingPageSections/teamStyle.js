import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  cardbody:{
    color:"#fffff"
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
  mainWrapper:{
    marginTop:"104px",
    margin:"0 auto",
    display:"block",
    padding: "70px 0",
    maxWidth:"960px",
    boxSizing:"border-box",
    minHeight:"85vh",
    textAlign: "center",
  },
  root: {
      width: '100%',
      "@media (max-width: 1100px)": { 
        width:'95%',
        padding: '15px 15px'  
      },
    fontFamily: 'CircularXXTT-Regular',
  '& .MuiAccordionDetails-root': {
      display: 'block'
      
  },
  '& .MuiAccordion-root.Mui-expanded': {
    margin:'0px',
    borderBottom: '1px solid #e5e5e5',
    borderTop: '1px solid #e5e5e5',
    boxShadow: 'none'
  },
  '& .Mui-expanded': {
    minHeight: '44px',
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '12px 0 0 0'
  }
},
heading: {
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.43,
  letterSpacing: 'normal',
  color: '#323232',
  fontFamily: 'CircularXXTT-Regular',
  cursor: 'pointer',
  padding: '8px 0',
},
descriptions: {
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.71,
  letterSpacing: 'normal',
  color: '#323232',
  textAlign: "left",
  cursor: 'pointer',
  fontFamily: 'CircularXXTT-Regular',
  '& a': {
    color: "#0c6cde",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: 'CircularXXTT-Regular',
  }
},  
}

export default teamStyle;
