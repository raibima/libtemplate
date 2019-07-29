import React from 'react';

function MyComponent() {
  return <div />;
}

if (process.env.NODE_ENV === 'development') {
  const PropTypes = require('prop-types');

  MyComponent.propTypes = {
    text: PropTypes.string,
  };
}
