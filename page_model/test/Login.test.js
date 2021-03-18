import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login with a valid user and invalid user').page`https://www.saucedemo.com/`

test('Validate user navigates to the product´s page',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
     
    await t.expect(ProductsPage.pageTitle.exists).ok()
    
})

test('Validate error message is displayed',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME_1)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
     
    await t.expect(LoginPage.errorButton.exists).ok()
    
})




