import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Logout from product´s page').page`https://www.saucedemo.com/`

test('Validate user navigates to the product´s page',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.BurguerButton)
        .click(ProductsPage.LogoutButton)

    await t.expect(LoginPage.pageTitle.exists).ok()
    
})