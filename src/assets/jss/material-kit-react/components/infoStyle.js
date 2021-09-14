import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
} from "assets/jss/material-kit-react.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px",
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  icon: {
    width: "36px",
    height: "36px",
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  title:{
  color: "#e65100",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "0",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  fontSize: "15px",
  },
  description: {
    color: "#1a237e",
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px",
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
};

export default infoStyle;
