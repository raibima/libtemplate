import React from 'react';

export function MyComponent() {
  const hahaha = <Foo />;
  console.log(hahaha);
  return <div />;
}

function Foo() {
  return 'foo';
}

if (process.env.NODE_ENV === 'development') {
  const PropTypes = require('prop-types');

  MyComponent.propTypes = {
    text: PropTypes.string,
  };
}
