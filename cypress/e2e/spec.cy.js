beforeEach(() => {
  cy.intercept("GET","http://localhost:3001/api/v1/reservations", {
    statusCode: 200,
    body: [{
      id: 1,
      name: "Christie",
      date: "12/29"
    }]
  });
  cy.visit("http://localhost:3000")
})
describe('Main Page', () =>  {
  it('should display a title', () => {
    cy.contains("h1", "Turing Cafe Reservations")
  })
  it('contains a form', () => {
    cy.get("form")
  })
  it("contains reservation details with text", () => {
    cy.fixture("testData.json").then((testData) => {
      expect(testData[0]).to.deep.equal({
          "name": "Christie",
          "date": "12/29",
          "time": "7:00"
      })
    })
  })
})
describe("formData", () => {
  it("should match data that is put into form", () => {
    const name = cy.get("input[name='name']").type("Ben")
    const date = cy.get("input[name='date']").type("03/23")
    const time = cy.get("input[name='time']").type("6:00")
    const number = cy.get("input[name='number']").type("1")
    const data = {name, date, time, number}
    cy.fixture('testData.json').then((testData) => {
      expect(data[name]).to.deep.equal(testData[1][name])
      expect(data[date]).to.deep.equal(testData[1][date])
      expect(data[time]).to.deep.equal(testData[1][time])
      expect(data[number]).to.deep.equal(testData[1][number])
    })
})
})
