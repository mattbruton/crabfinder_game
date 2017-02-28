import React from 'react';

import styles from './styles.scss';

const Sun = props => {
  return <div>
    <svg version="1.1" viewBox="0 0 121 121" preserveAspectRatio="xMinYMin meet" id={styles.svg}>
        <circle r="36.5" cy="59.5" cx="70" id={styles.sun}/>
        <path transform="rotate(150 30.973163604736325,63.05015182495117) "  d="m30.97316,54.39015l-10,17.32l20,0l-10,-17.32z" className={styles.sunbeam} />
        <path transform="rotate(-180 69.4727554321289,102.05003356933594)" d="m69.47276,93.39004l-10,17.32l20,0l-10,-17.32z" className={styles.sunbeam} />
        <path transform="rotate(-150 107.97246551513672,62.55003356933593) " className={styles.sunbeam}  d="m107.97248,53.89003l-10,17.32l20,0l-10,-17.32z"/>
        <path d="m69.47255,8.39048l-10,17.32l20,0l-10,-17.32z" className={styles.sunbeam} />
        <path transform="rotate(-141 42.22273635864257,89.04994201660156) " d="m42.22274,83.22903l-6.91748,11.64182l13.83496,2l-6.91748,-14.64182z" className={styles.sunbeam_small} />
        <path transform="rotate(-171 39.22274398803711,37.050148010253906)" d="m39.22274,31.22924l-6.91748,11.64182l13.83496,0l-6.91748,-11.64182z" className={styles.sunbeam_small} />
        <path transform="rotate(-105 95.72251892089847,86.54995727539064) " d="m95.72252,80.72904l-6.91748,11.64182l13.83496,0l-6.91748,-11.64182z" className={styles.sunbeam_small} />
        <path transform="rotate(-74 95.72252655029295,33.05016326904297) " d="m95.72252,27.22925l-6.91748,11.64182l13.83496,0l-6.91748,-11.64182z" className={styles.sunbeam_small} />
        <circle r="34.5" cy="59.5" cx="70" id={styles.sun_middle}/>
      </svg>
  </div>;
}

export default Sun;
