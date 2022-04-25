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
    })
})