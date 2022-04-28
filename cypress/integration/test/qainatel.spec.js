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
        let userInfo = createUser()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get("input[name=username]").type(userInfo[0])
        cy.get("input[name=password]").type(userInfo[1])
        cy.get(".btn-primary").click()
    })
})

function createUser(){
    let hora = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let username =  'testQA_'+hora + min + sec
    let password =  hora + min + sec

    let user_info = [username, password]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Ítalo")
    cy.get("input[name=lastName]").type("Moura")
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get(".btn-primary").click()
    cy.get(".alert-success").should("contain.text", "Registration successful")

    return user_info;
}