const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    direction: "rtl"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {},
    overflow: "auto",
    position: "relative",
    float: "left",
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
