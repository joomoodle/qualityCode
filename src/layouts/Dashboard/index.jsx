import React, { Component, Fragment } from "react";

// Externals
import classNames from "classnames";
import compose from "recompose/compose";
import PropTypes from "prop-types";

// Material helpers
import { withStyles, withWidth } from "@material-ui/core";

// Material components
import { Drawer } from "@material-ui/core";

// Custom components
import { Sidebar, Topbar, Footer } from "./components";

// Component styles
import styles from "./styles";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const isMobile = ["xs", "sm", "md"].includes(props.width);
    this.state = {
      isOpen: isMobile,
      user: null
    };
  }
  componentDidMount = async () => {};

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { classes, width, title, children, modules } = this.props;
    const { isOpen, user } = this.state;

    const isMobile = ["xs", "sm", "md"].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <div className={classes.root}>
          <Topbar
            className={classNames(classes.topbar, {
              [classes.topbarShift]: false
            })}
            isSidebarOpen={isOpen}
            onToggleSidebar={this.handleToggleOpen}
            title={title}
          />
          {!isOpen ? (
            <div className={classes.menu}>
              <Sidebar />
            </div>
          ) : null}
        </div>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: false
          })}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  modules: PropTypes.array.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    modules: state.user.modules ? state.user.modules : []
  };
};

const mapDispatchToProps = dispatch => ({});

export default compose(
  withStyles(styles),
  withWidth(),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
