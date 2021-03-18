import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import OnlyProduct from '../pages/OnlyProduct'
import { CREDENTIALS } from '../data/Constants'
import ShoppingCart from '../pages/ShoppingCart'
import MissingInfo from '../pages/MissingInfo'
import OverviewPage from '../pages/OverviewPage'


fixture('Validate error message for the user´s information page')
   .page`https://www.saucedemo.com/`

   test('Error message',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)
        .click(ShoppingCart.CheckoutButton)
        .click(MissingInfo.ButtonContinue)

    await t.expect(MissingInfo.errorMessage.exists).ok()
    
})

test('Fill the information for checkout',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)
        .click(ShoppingCart.CheckoutButton)
        .typeText(MissingInfo.FirstNameField, CREDENTIALS.PERSONAL_INFORMATION.FIRST_NAME)
        .typeText(MissingInfo.LastNameField, CREDENTIALS.PERSONAL_INFORMATION.LAST_NAME)
        .typeText(MissingInfo.Zip_PostalCodeField, CREDENTIALS.PERSONAL_INFORMATION.ZIP)
        .click(MissingInfo.ButtonContinue)

    await t.expect(OverviewPage.pageTitle.exists).ok()
    
})