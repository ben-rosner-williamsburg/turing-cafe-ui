import { useState } from "react";
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
      <label>Name:
      <input
      name="name"
      type="text"
      placeholder="name"
      onChange={(event) => {setDataToForm(event)}}
      value={form.name}
      />
      </label>
      <label>Date:
      <input
      name="date"
      type="text"
      placeholder="date"
      onChange={(event) => {setDataToForm(event)}}
      value={form.date}
      />
      </label>
      <label>Time:
      <input
      name="time"
      type="text"
      placeholder="time"
      onChange={(event) => {setDataToForm(event)}}
      value={form.time}
      />
      </label>
      <label>Number:
      <input
      name="number"
      type="text"
      placeholder="number"
      onChange={(event) => {setDataToForm(event)}}
      value={form.number}
      />
      </label>
      <button type="submit" onClick={handleSubmit}>Make Reservation!</button>
    </form>
  )
}

export default Form;