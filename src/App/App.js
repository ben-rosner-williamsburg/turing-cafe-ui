import './App.css';
import React, {useState, useEffect} from 'react';
import { getReservations } from '../apiCalls';
import ReservationCards from "../ReservationCards/ReservationCards"

function App() {
  const [reservations, setReservations] = useState([]);
  const fetchData = () => {
     getReservations().then(data => {
      setReservations(data)
     });
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        {/* <Form /> */}
      </div>
      <div className='resy-container'>
        <ReservationCards reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 