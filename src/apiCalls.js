export const getReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then((response) => {
    if(response.ok){
      console.log(response)
      return response.json()
    }
  })
  .catch((err => console.error(err)))
}