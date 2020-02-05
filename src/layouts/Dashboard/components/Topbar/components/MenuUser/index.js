import React, { Component, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

// Externals
import PropTypes from "prop-types";
import classNames from "classnames";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

// Material icons
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  Payment as PaymentIcon,
  PeopleOutlined as PeopleIcon,
  Code as CodeIcon,
  Store as StoreIcon,
  Error as ErrorIcon,
  Person,
  ExitToApp
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

const icons = {
  order: {
    icon: <PaymentIcon />,
    color: "blue"
  },
  user: {
    icon: <Person />,
    color: "#212529"
  },
  exit: {
    icon: <ExitToApp />,
    color: "#212529"
  },

  product: {
    icon: <StoreIcon />,
    color: "green"
  },
  feature: {
    icon: <CodeIcon />,
    color: "purple"
  },
  error: {
    icon: <ErrorIcon />,
    color: "red"
  }
};

class MenuUser extends Component {
  render() {
    const { className, classes, items, onSelect } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <Fragment>
          <div className={classes.content}>
            <List component="div">
              {items.map(notification => (
                <Link
                  key={notification.id}
                  onClick={() => {
                    if (notification.id === 2) {
                      notification.to();
                    }
                  }}
                >
                  <ListItem
                    className={classes.listItem}
                    component="div"
                    onClick={onSelect}
                  >
                    <ListItemIcon
                      className={classes.listItemIcon}
                      style={{ color: icons[notification.type].color }}
                    >
                      {icons[notification.type].icon}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ secondary: classes.listItemTextSecondary }}
                      primary={notification.title}
                    />
                  </ListItem>
                  <Divider />
                </Link>
              ))}
            </List>
          </div>
        </Fragment>
      </div>
    );
  }
}

MenuUser.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

MenuUser.defaultProps = {
  items: [],
  onSelect: () => {}
};

export default withStyles(styles)(MenuUser);
