/// <reference types="Cypress" />

describe('REST API Test with Cypress', () => {
    it('API Test - Validate Headers', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/24')
    })
})