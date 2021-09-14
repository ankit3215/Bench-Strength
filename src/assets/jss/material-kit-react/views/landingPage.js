import { container } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    display: "inline-block",
    position: "center",
    marginTop: "1px",
    minHeight: "8px",
    color: "#fff176",
    textDecoration: "none",
    fontSize: "50px",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "800px",
    margin: "10px auto 0",
  },
  main: {
    background: "#beef00",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
