import React from 'react';
import PropTypes from 'prop-types';

export function MyComponent() {
  return <div />;
}

export useMyHook() {
  return true;
}

MyComponent.propTypes = {
  text: PropTypes.string,
};
