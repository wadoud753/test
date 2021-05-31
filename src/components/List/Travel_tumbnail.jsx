import React, { Component } from 'react'
import styles from './List.module.css';
import TrainIcon from '@material-ui/icons/Train';

class Travel_tumbnail extends Component {
    render() {
        return (
            <div className={styles.list}>
               
                <div className = {styles.list__travel}>
                    
                        <div className = {styles.list__info}>
                            <h6>Ma gare de départ</h6>
                            <h3>{this.props.travel.departure_time}</h3>
                            <h5>{this.props.travel.departure}</h5>
                        </div>
                        <div className = {styles.list__info}>
                            <TrainIcon className = {styles.list__logo}/>
                        </div>
                        <div className = {styles.list__info}>
                        <h6>Ma gare d'arrivée </h6>
                            <h3>{this.props.travel.arrival_time}</h3>
                            <h5>{this.props.travel.arrival}</h5>
                        </div>
                    
                </div>
                <div className = {styles.list__price}>
                        <h4>Pour 1 passager</h4>
                        <h5>à partire de</h5>
                        <h2>90 DH</h2>
                        <button className = {styles.info__button}>Réserver</button>                </div>



            </div>
        )
    }
}

export default Travel_tumbnail;