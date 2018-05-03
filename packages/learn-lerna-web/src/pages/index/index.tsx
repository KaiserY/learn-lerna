import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from '../../components/Hello';

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
};

renderRoot((
  <Hello compiler='TypeScript' framework='React' />
));
