import ReservationCard from "../ReservationCard/ReservationCard"
import "./ReservationCards.css"
function ReservationCards({reservations}) {
  const newReservations = reservations.map(reservation => {
    return (
      <ReservationCard reservation={reservation} key={reservation.id}></ReservationCard>
    )
  })
  return (
    <div className="reservation-cards">
    {newReservations}
    </div>
  )
}

export default ReservationCards;