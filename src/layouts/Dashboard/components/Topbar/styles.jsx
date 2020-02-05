export default theme => ({
  imgApp: {
    marginLeft: "-4px",
    height: "54px"
  },
  imgUser: {
    borderRadius: 100,
    height: "40px"
  },
  root: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    height: "64px",
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: "auto",
    width: "100%"
  },
  title: {
    marginLeft: theme.spacing.unit
  },

  menuButton: {
    marginLeft: "-4px"
  },
  notificationsButton: {
    marginLeft: "auto",
    marginTop: -15,
    marginRight: 10,
    color: "#ffffff",
    width: 35,
    height: 35
  },
  signOutButton: {
    marginLeft: theme.spacing.unit,
    width: 50
  },

  toolbar2: {
    minHeight: "auto",
    width: "100%",
    background: "rgba(10, 24, 50, 0.15);"
  },
  divBoxUser: {
    display: "flex",
    flexDirection: "row",
    marginRight: 15,
    "&:hover": {
      backgroundColor: "rgba(254, 247, 245 , 0.15);",
      padding: 10
    }
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    fontSize: "14px",
    fontWeight: 500,
    height: "36px",
    width: "36px",
    flexDirection: "column"
  },
  boxTextUser: {
    flexDirection: "column",
    marginTop: 5,
    marginLeft: 10
  },
  textUser: {
    color: "#ffffff"
  },
  boxIconAux: {
    flexDirection: "column",
    marginLeft: 5
  },
  iconAux: {
    color: "#ffffff"
  }
});
