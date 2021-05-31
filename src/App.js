import React , {useState, useEffect , Component} from 'react';
import styles from './App.module.css';
import {Header ,HomePage , Booking,  Footer} from './components/';
import List from './components/List/List';
import { BrowserRouter as Router , Switch, Route, useParams} from "react-router-dom";
import axios from 'axios';


// function App() {

  
//   const [travel, setTravel]= useState();
//   console.log(travel);
  
//     return (
      
//       <div className={styles.App}>
//         <Router>
//           <Header />

//           <Switch>

//             <Route path="/List">
//               <List travel={travel} />
//             </Route>
//             <Route path="/">
//               <HomePage />
//               <Booking setTravel={setTravel} />
//             </Route>

//           </Switch>
//           <Footer />
//         </Router>
        
//       </div>
//     );
// }

function App(){

  const [travel, setTravel]= useState();
    return (
      <div className={styles.App}>
        <Router>
          <Header />

          <Switch>

            <Route path="/List/:depart/:arrival/:time" children={<ListingTravels />} />
            <Route path="/">
              <HomePage />
              <Booking setTravel={setTravel} />
            </Route>

          </Switch>
          <Footer />
        </Router>
        
      </div>
    );
}


var ListingTravels = () => {

  
  let { depart, arrival, time } = useParams();
  let [travels, setTravels] = useState();
  let [statue, setStatue] = useState();

  useEffect(() => {
    
    axios.get(`http://localhost:8080/api/travel/?departure=${depart}&arrival=${arrival}&departure_time=${time}`)
      .then((res) => {
        if(res.data.length > 0){
          setTravels(res.data);
          setStatue("Success");
        }
        else{
          setStatue("Error : cannot Fetch data from server");
        }
    })

  }, []); // Mark [] here.


  

  console.log(travels);
  return (
    (statue === "Success") ?  <List travels={travels} /> : <h2>{statue}</h2>);
}

export default App;
