import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import burger from '../imgs/hamburguer.png';
import uniform from '../imgs/siriCascudoUniforme.png';

class PrepareBurger extends React.Component {
  render() {
    const { spiedRecipe } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        <img src={ burger } alt="Hambúrguer de Siri" height="100px" width="100px" />
        <h2>Modo de preparo</h2>
        <div>
          { spiedRecipe.map(
            (element, index) => <span key={ index }>{ element }</span>,
          ) }
        </div>
        <img src={ uniform } alt="Boné Siri Cascudo" height="100px" width="100px" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  spiedRecipe: state.spiedRecipe.recipe,
});

PrepareBurger.propTypes = {
  spiedRecipe: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(PrepareBurger);
