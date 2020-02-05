import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  StoreOutlined as StoreIcon,
  AssessmentOutlined as Assessment,
  SendOutlined as Send,
  PaymentOutlined as Payment,
  InboxOutlined as Inbox,
  NotificationsActiveOutlined as Notifi,
  BusinessOutlined as BusinessIcon,
  BugReportOutlined as Bug,
  Tv,
  Domain,
  Assignment,
  FlightLand
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

class Sidebar extends Component {
  _renderIcon = name => {
    const { classes } = this.props;

    switch (name) {
      case "DashboardIcon":
        return <DashboardIcon className={classes.iconMargin} />;
      case "PeopleIcon":
        return <PeopleIcon className={classes.iconMargin} />;
      case "StoreIcon":
        return <StoreIcon className={classes.iconMargin} />;
      case "AccountBoxIcon":
        return <AccountBoxIcon className={classes.iconMargin} />;
      case "SettingsIcon":
        return <SettingsIcon className={classes.iconMargin} />;
      case "Assessment":
        return <Assessment className={classes.iconMargin} />;
      case "Send":
        return <Send />;
      case "Payment":
        return <Payment className={classes.iconMargin} />;
      case "Inbox":
        return <Inbox className={classes.iconMargin} />;
      case "Notifi":
        return <Notifi className={classes.iconMargin} />;
      case "BusinessIcon":
        return <BusinessIcon className={classes.iconMargin} />;
      case "incidents":
        return <Bug className={classes.iconMargin} />;
      case "Tv":
        return <Tv className={classes.iconMargin} />;
      case "Domain":
        return <Domain className={classes.iconMargin} />;
      case "Assignment":
        return <Assignment className={classes.iconMargin} />;
        case "FlightLand":
          return <FlightLand className={classes.iconMargin} />;
      default:
        return "";
    }
  };
  _renderMainMenu = () => {
    const { classes, modules } = this.props;
    return modules
      .filter(item => item.idtask === 1)
      .map(item => {
        if (item.isMenu) {
          return (
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to={{
                pathname: `../${item.name}`
              }}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {this._renderIcon(item.icon)}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.displayName}
              />
            </ListItem>
          );
        }
      });
  };

  renderHorizontalMenu = () => {
    const { classes } = this.props;

    const modules = [
      {
        to: "admin",
        icon: "Tv",
        displayName: "Dashboard SITAV",
        isMenu: true
      },
      {
        to: "tours",
        icon: "FlightLand",
        displayName: "Tours",
        isMenu: true
      }
    ];

    return modules.map(item => {
      if (item.isMenu) {
        return (
          <Link to={item.to} className={classes.link}>
            <div className={classes.divMenu}>
              {this._renderIcon(item.icon)}
              {item.displayName}
            </div>
          </Link>
        );
      }
    });
  };
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return <nav className={rootClassName}>{this.renderHorizontalMenu()}</nav>;
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired
};

Sidebar.defaultProps = {
  modules: []
};
export default withStyles(styles)(Sidebar);
