import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { incrementCount, decrementCount, getCount } from "./redux";

export function Counter({ count, onIncrementClick, onDecrementClick }) {
  return (
    <div>
      <p id="count" style={{ fontSize: "xx-large" }}>{count}</p>
      <div>
        <button id="increment" onClick={onIncrementClick}>Increment</button>
        <button id="decrement" onClick={onDecrementClick}>Decrement</button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { count: getCount(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => dispatch(incrementCount()),
    onDecrementClick: () => dispatch(decrementCount())
  };
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
