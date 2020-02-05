export default theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%"
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "63px",
    flexShrink: 0
  },
  logoLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 0
  },
  logoImage: {
    cursor: "pointer",
    width: "80%"
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
    backgroundColor: "#ffffff",
    height: "65px"
  },
  avatar: {
    width: "100px",
    height: "100px"
  },
  nameText: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 2
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
      "& $listItemIcon": {
        color: theme.palette.primary.main,
        marginLeft: "-4px"
      }
    },
    "& + &": {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.primary.light,
    "& $listItemText": {
      color: theme.palette.text.primary
    },
    "& $listItemIcon": {
      color: theme.palette.primary.main,
      marginLeft: "-4px"
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginTop: theme.spacing.unit * 2
  },
  divMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: theme.spacing.unit * 2,
    width: 155,
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover": {
      color: "#ffffff"
    }
  },
  iconMargin: {
    marginRight: 5
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    marginTop: 15
  }
});
