import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import OnlyProduct from '../pages/OnlyProduct'
import { CREDENTIALS } from '../data/Constants'
import ShoppingCart from '../pages/ShoppingCart'

fixture('Navigates to the shopping cart')
   .page`https://www.saucedemo.com/`

test('Validated user navigates to the Shopping Cart page',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.ShoppingCart)

    await t.expect(ShoppingCart.pageTitle.exists).ok()
    
})

