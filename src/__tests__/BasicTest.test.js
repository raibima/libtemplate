import React from 'react';
import ReactDOM from 'react-dom';

import { MyComponent } from '../index';

it('can render to the DOM', () => {
  const root = document.createElement('div');
  ReactDOM.render(<MyComponent />, root);
  ReactDOM.unmountComponentAtNode(root);
});
