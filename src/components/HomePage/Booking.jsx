import React, {useState} from 'react';
import axios from 'axios';

import styles from './Booking.module.css';
import { Link } from 'react-router-dom';

// import 'react-datepicker/dist/react-datepicker.css';




function Booking({ props, setTravel }) {

      const [depart, setDepart] = useState();
      const [arrival, setArrival] = useState();
      const [departureTime, setDepartureTime] = useState();
      // const send = () => {
      //       axios.get(`http://localhost:8080/api/travel/?departure=${depart}&arrival=${arrival}&departure_time=${departureTime}`)
      //       .then((res) => {
      //           setTravel(res.data);
      //           //window.location( 'http://localhost:8080/List');
      //       })
      // }

      return (

            <div className={styles.booking}>
                  <div >
                        <input type="text" onChange={(e) => setDepart(e.target.value)}></input>
                        <input type="text" onChange={(e) => setArrival(e.target.value)}></input>
                        <input type="text" onChange={(e) => setDepartureTime(e.target.value)}></input>
                        <Link to={`/list/${depart}/${arrival}/${departureTime}`}>Search</Link>
                  </div>
            </div>
      )

}

export default Booking;
