/*
describe("main screen", ()=> {
  beforeEach(()=>{
  })
})

it("hahahaXXXD", ()=>{
  cy.server()

  cy.route("GET", `http://127.0.0.1:8000/notes`).as("getNotes")

  cy.wait("@getNotes").then
})*/


it("renders without crashing", () => {
  // eslint-disable-next-line no-undef
  cy.visit("/");
});

it("expects textarea to be empty by default", () => {
  // eslint-disable-next-line no-undef
  cy.get('.note-editor__text-input').should('be.empty')
});

it("expects language to be switched from en to ru", ()=>{
  // eslint-disable-next-line no-undef
  cy.get('.btn-ru').click()
})

it("expects a textarea to be filled with some text and submitted", ()=>{
  // eslint-disable-next-line no-undef
  cy.get('.note-editor__text-input').type('TEST')
  // eslint-disable-next-line no-undef
  cy.get('.note-editor__add-button').click()
})
