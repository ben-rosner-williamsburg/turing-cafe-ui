import ReservationCard from "../ReservationCard/ReservationCard"

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