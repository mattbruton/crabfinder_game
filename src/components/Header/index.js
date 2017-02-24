import React, {PropTypes, Component} from 'react';
import styles from './styles.scss';

const Header = props => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Crabfinder</h1>
            {props.links.map(link => {
                return <h3 key={link} className={styles.nav_item}>{link}</h3>
            })}
        </div>
    );
};

Header.propTypes = {
    links: PropTypes.array.isRequired
}

export default Header;
