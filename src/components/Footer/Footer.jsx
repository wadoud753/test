import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <p>© 2021 MonTrain !</p>
            <p>Confidentialité . Conditions d'utilisation . Plan du site . Détails de l'entreprise</p>
        </div>
    )
}

export default Footer
