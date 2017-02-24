import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/Header';
import styles from './styles/main.scss';

const navLinks = ['posts', 'about', 'contact'];

export default class Application extends Component {



  render () {
    return (
      <div>
        <Header links={navLinks} />
        <h1>pls</h1>
        <p>yep</p>
      </div>
    )
  }
}

console.log('crabfinder');

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
