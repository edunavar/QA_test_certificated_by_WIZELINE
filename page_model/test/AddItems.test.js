import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import OnlyProduct from '../pages/OnlyProduct'
import { CREDENTIALS } from '../data/Constants'
import ShoppingCart from '../pages/ShoppingCart'

fixture('Add items to Shopping Cart')
   .page`https://www.saucedemo.com/`

test('Validated user adds one item to the Shopping Cart',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)

    await t.expect(ShoppingCart.pageTitle.exists).ok()
    
})

test('Validated user adds two item to the Shopping Cart',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.Product2)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)

    await t.expect(ShoppingCart.pageTitle.exists).ok()
    
})