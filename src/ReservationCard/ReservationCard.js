function ReservationCard({reservation}) {
  const {name, date, time, number} = reservation
  return (
    <div className="reservation-card">
    <h3>{name}</h3>
    <p>{date}</p>
    <p>{time}</p>
    <p>Number of Guests: {number}</p>
    </div>
  )
}

export default ReservationCard;