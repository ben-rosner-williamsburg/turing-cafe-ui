import { useState } from "react";
import "./Form.css"
function Form({addReservation}) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    number: 0
  })
  function setDataToForm(event) {
    const newFormData = {...form}
     newFormData[event.target.name] = event.target.value;
     setForm(newFormData);
     console.log(form)
  }

  function handleSubmit(event) {
    event.preventDefault();
    addReservation(form)
  }
  return(
    <form className="input-reservation-form">
      <input
      name="name"
      type="text"
      placeholder="Name"
      onChange={(event) => {setDataToForm(event)}}
      value={form.name}
      />
      <input
      name="date"
      type="text"
      placeholder="Date (mm/dd)"
      onChange={(event) => {setDataToForm(event)}}
      value={form.date}
      />
      <input
      name="time"
      type="text"
      placeholder="Time"
      onChange={(event) => {setDataToForm(event)}}
      value={form.time}
      />
      <input
      name="number"
      type="text"
      placeholder="Number of Guest"
      onChange={(event) => {setDataToForm(event)}}
      value={form.number}
      />
      <button type="submit" onClick={handleSubmit}>Make Reservation!</button>
    </form>
  )
}

export default Form;