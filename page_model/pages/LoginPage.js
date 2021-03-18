import { Selector } from 'testcafe'

class LoginPage{
    constructor(){
        this.pageTitle = Selector('.login_logo')
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('.btn_action')
        this.errorButton = Selector('.error-button')//buscar alternativas
    }
}

export default new LoginPage()