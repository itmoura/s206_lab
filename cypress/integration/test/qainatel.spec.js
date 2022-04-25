describe('visit google', () => {
    // it('pesquisa inatel', () => {
    //     cy.visit("https://google.com.br");
    //     cy.get("input[name=q]").type("INATEL {enter}")
    // })

    it('criando um usuário no globalQA', () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get(".btn-link").click();
        cy.get("#firstName").type("Ítalo")
        cy.get("input[name=lastName]").type("Moura")
        cy.get("#username").type("sdfsa")
        cy.get("#password").type("asfsafs")
        cy.get(".btn-primary").click()
        cy.get(".alert-success").should("contain.text", "Registration successful")
        // ./node_modules/.bin/cypress open
    })

    it('Login na plataforma com sucesso!', () => {
        createUser()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get("input[name=username]").type("sdfsa")
        cy.get("input[name=password]").type("asfsafs")
        cy.get(".btn-primary").click()
    })
})

function createUser(){
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Ítalo")
    cy.get("input[name=lastName]").type("Moura")
    cy.get("#username").type("sdfsa")
    cy.get("#password").type("asfsafs")
    cy.get(".btn-primary").click()
    cy.get(".alert-success").should("contain.text", "Registration successful")
}