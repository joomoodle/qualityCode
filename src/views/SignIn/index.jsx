import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Externals
import PropTypes from "prop-types";
import compose from "recompose/compose";

// Material helpers
import { withStyles } from "@material-ui/core";

import { connect } from "react-redux";

import { getPokemones } from "../../actions/user";
// Material components
import { Typography } from "@material-ui/core";

// Component styles
import styles from "./styles";

class SignIn extends Component {
  state = {
    
  };

  componentDidMount = async () => {
    const { get_Pokemones } = this.props;
    let pokemones = await get_Pokemones();
    console.log(pokemones.stats)
    let myMove = pokemones.moves.find(x => x.move.name === 'swords-dance')
    console.log(myMove.move.url)

    let myStats = pokemones.stats.filter(x => x.base_stat === 65)

    console.log(myStats)


    let myStats_2 = pokemones.stats.filter(x => x.base_stat === 65).map(x => x.base_stat + 1);
    console.log(myStats_2)
  }

  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <Typography>Hola mundo</Typography>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  get_Pokemones: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    idusers: state.user.idusers
  };
};

const mapDispatchToProps = dispatch => ({
  get_Pokemones: data => dispatch(getPokemones())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compose(withRouter, withStyles(styles))(SignIn));
