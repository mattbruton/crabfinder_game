import React from 'react';

import Sky from '../Sky';
import Beach from '../Beach';


import styles from './styles.scss';

const Game = props => {
  return <div className={styles.container}>
    <Sky />
    <Beach />
  </div>;
}

export default Game;
