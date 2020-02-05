export default theme => ({
  root: {
    background:
      "radial-gradient(at 50% -20%, #1967a9, #0a1832) fixed !important"
  },
  topbar: {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    right: "auto",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background:
      "radial-gradient(at 50% -20%, #1967a9, #0a1832) fixed !important"
  },
  topbarShift: {
    marginLeft: "271px",
    width: "calc(-271px + 100vw)"
  },
  drawerPaper: {
    zIndex: 1200,
    width: "271px"
  },
  menu: {
    zIndex: 1200,
    width: "100%",
    height: 50,
    background: "rgba(10, 24, 50, 0.15) !important",
    marginTop: "64px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    color: "#ffffff"
  },
  sidebar: {},
  content: {
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: "270px"
  }
});
