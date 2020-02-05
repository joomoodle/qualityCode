export default theme => ({
  root: {
    width: "210px",
    maxWidth: "100%"
  },
  header: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'url("/images/notification.svg")',
    backgroundPositionX: "right",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    paddingBottom: "34px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "34px"
  },
  subtitle: {
    color: theme.palette.text.secondary
  },
  content: {},
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.default
    }
  },
  listItemIcon: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    padding: "5px",
    borderRadius: "50%",
    marginRight: theme.spacing.unit * 1
  },
  listItemTextSecondary: {
    marignTop: "4px",
    color: "#212529"
  },
  arrowForward: {
    color: theme.palette.text.secondary,
    height: "16px",
    width: "16px"
  },
  footer: {
    paddingBottom: theme.spacing.unit,
    display: "flex",
    justifyContent: "center"
  },
  empty: {
    textAlign: "center",
    padding: theme.spacing.unit * 3
  },
  emptyImageWrapper: {
    marginBottom: theme.spacing.unit * 3
  },
  emptyImage: {
    width: "240px",
    maxWidth: "100%",
    height: "auto"
  }
});
