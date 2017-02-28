import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';

import styles from './styles/main.scss';

export default class Application extends Component {

  render () {
    return (
      <div>
        <Game />

      </div>
    )
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
