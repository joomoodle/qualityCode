import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Externals
import classNames from "classnames";
import compose from "recompose/compose";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  Avatar
} from "@material-ui/core";

// Material icons
import {
  NotificationsOutlined as NotificationsIcon,
  KeyboardArrowDown,
  Menu as MenuIcon
} from "@material-ui/icons";

// Custom components
import { NotificationList, MenuUser } from "./components";

// Component styles
import styles from "./styles";

const images = {
  logo: `${process.env.PUBLIC_URL}/common/logo.png`,
  avatar: `${process.env.PUBLIC_URL}/common/avatar-1.jpg`
};

class Topbar extends Component {
  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 10,
    notificationsCount: 0,
    notificationsEl: null,
    connection: null,
    showMenuAuxUser: null
  };

  componentDidMount = async () => {
    this.signal = true;
  };

  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;
    history.push("/sign-in");
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };

  handleShowMenuUser = event => {
    this.setState({
      showMenuAuxUser: event.currentTarget
    });
  };

  handleCloseMenuUser = () => {
    this.setState({
      showMenuAuxUser: null
    });
  };

  render() {
    const { classes, className, isSidebarOpen, onToggleSidebar } = this.props;
    const { notifications, notificationsEl, showMenuAuxUser } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);
    const showMenuUser = Boolean(showMenuAuxUser);

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <img className={classes.imgApp} src={images.logo} alt="" />
            <IconButton
              className={classes.notificationsButton}
              onClick={this.handleShowNotifications}
            >
              <Badge badgeContent={4} color="primary" variant="dot">
                <NotificationsIcon
                  style={{
                    color: "#fffff",
                    width: 30,
                    height: 30
                  }}
                />
              </Badge>
            </IconButton>

            <div
              className={classes.divBoxUser}
              onClick={this.handleShowMenuUser}
            >
              <Avatar className={classes.avatar} src={images.avatar} />
              <div className={classes.boxTextUser}>
                <Typography className={classes.textUser}>
                  {"Patrick N."}
                </Typography>
              </div>
              <div className={classes.boxIconAux}>
                <KeyboardArrowDown className={classes.iconAux} />
              </div>
            </div>
            {isSidebarOpen ? (
              <IconButton className={classes.menuButton} variant="text">
                <MenuIcon />
              </IconButton>
            ) : null}
          </Toolbar>
        </div>

        <Popover
          anchorEl={notificationsEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          onClose={this.handleCloseNotifications}
          open={showNotifications}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <NotificationList
            notifications={notifications}
            onSelect={this.handleCloseNotifications}
          />
        </Popover>

        <Popover
          anchorEl={showMenuAuxUser}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          onClose={this.handleCloseMenuUser}
          open={showMenuUser}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <MenuUser
            items={[
              { id: 1, title: "Mi Perfil", type: "user", to: null },
              {
                id: 2,
                title: "Cerrar Sesión",
                type: "exit",
                to: this.handleSignOut
              }
            ]}
          />
        </Popover>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  notification: PropTypes.array.isRequired,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  notification: [],
  onToggleSidebar: () => {}
};

export default compose(withRouter, withStyles(styles))(Topbar);
