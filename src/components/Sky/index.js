import React from 'react';
import Sun from '../Sun';

import styles from './styles.scss';

const Sky = props => {
  return <div className={styles.container}>
    <Sun />
  </div>;
}

export default Sky;
