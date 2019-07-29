import React from 'react';
import PropTypes from 'prop-types';

export function MyComponent(props) {
  return <p>{props.text}</p>;
}

export function useMyHook() {
  return true;
}

MyComponent.propTypes = {
  text: PropTypes.string,
};
