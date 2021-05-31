import React from 'react';
import styles from './Header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';


function Header() {
    return (
        <div className={styles.header}>
            
            <h1 className={styles.header__logo}>MonTrain</h1>
        
            <div className={styles.header__right}>
                
                <PersonIcon className={styles.header__icons}/>
                <ShoppingCartIcon className={styles.header__icons} />

            </div>
        </div>
    )
}

export default Header
