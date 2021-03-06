describe('The Login Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:8080');
        cy.get('[href="/about"]').click()
    })
    it('successfully register', () => {
        cy.get('[href="/register"]').click()
        cy.get('#e-mail').type('test@gmail.com').should('have.value', 'test@gmail.com')
        cy.get('#username').type('trinity').should('have.value', 'trinity')
        cy.get('#dateofbirth').type('22.02.2021').should('have.value', '22.02.2021')
        cy.get('#password').type('231').should('have.value', '231')
        cy.get('#gender').type('male').should('have.value', 'male')
        cy.get('button').click()
    })
    it('successfully Login', () => {
        cy.get('[href="/login"]').click()
        cy.get('.form-inputs>input#email')
            .type('test@gmail.com').should('have.value', 'test@gmail.com')
        cy.get('.form-inputs>input#password')
            .type('231').should('have.value', '231')
        cy.get('button').click()
    })
    it('calculator work', () => {
        cy.get('.sidebar').click('topLeft')
        cy.get('.standard>.regular> ul > :nth-child(6) > button').click()
        cy.get('.standard>.regular> ul > :nth-child(4) > button').click()
        cy.get('.standard>.regular> ul > :nth-child(14) > button').click()
        cy.get('.standard>.regular> ul > :nth-child(8) > button').click()
        cy.get('.standard>.regular> ul > :nth-child(16) > button').click()
        cy.get('.scientific > ul > :nth-child(16) > button').click()
        cy.get('.scientific > ul > :nth-child(6) > button').click()
        cy.get('.scientific > ul > :nth-child(19) > button').click()
        cy.get('.regular > ul > :nth-child(9) > button').click()
        cy.get('.regular > ul > :nth-child(12) > button').click()
        cy.get('.regular > ul > :nth-child(11) > button').click()
        cy.get('.scientific > ul > :nth-child(3) > button').click()
        cy.get('.scientific > ul > :nth-child(17) > button').click()
        cy.get('.scientific > ul > :nth-child(9) > button').click()
        cy.get('.standard>.regular> ul > :nth-child(19) > button').click()
        cy.get('[href="/calculator"]').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('#btn0').click()
        cy.get('#btn1').click()
        cy.get('#btnSum').click
        cy.get('#btn0').click()
        cy.get('#btn1').click()
        cy.get('#btnEql1').click()
        cy.get('[href="/Home"]').click()
        cy.get('[href="/about"]').click()
        cy.get('[href="/login"]').click()
    })
})