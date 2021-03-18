import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import OnlyProduct from '../pages/OnlyProduct'
import { CREDENTIALS } from '../data/Constants'
import ShoppingCart from '../pages/ShoppingCart'
import MissingInfo from '../pages/MissingInfo'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'


fixture('Final order Item')
   .page`https://www.saucedemo.com/`

test('Validate Items on the overview pages',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.Product3)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)
        .click(ShoppingCart.CheckoutButton)
        .typeText(MissingInfo.FirstNameField, CREDENTIALS.PERSONAL_INFORMATION.FIRST_NAME)
        .typeText(MissingInfo.LastNameField, CREDENTIALS.PERSONAL_INFORMATION.LAST_NAME)
        .typeText(MissingInfo.Zip_PostalCodeField, CREDENTIALS.PERSONAL_INFORMATION.ZIP)
        .click(MissingInfo.ButtonContinue)

    await t.expect(ProductsPage.Product3.exists && ProductsPage.Product1.exists).ok()
})

test('Finishing order',async t => {
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)   
        .click(LoginPage.loginButton)
        .click(ProductsPage.Product1)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.Product3)
        .click(OnlyProduct.AddCart)
        .click(OnlyProduct.BackButton)
        .click(ProductsPage.ShoppingCart)
        .click(ShoppingCart.CheckoutButton)
        .typeText(MissingInfo.FirstNameField, CREDENTIALS.PERSONAL_INFORMATION.FIRST_NAME)
        .typeText(MissingInfo.LastNameField, CREDENTIALS.PERSONAL_INFORMATION.LAST_NAME)
        .typeText(MissingInfo.Zip_PostalCodeField, CREDENTIALS.PERSONAL_INFORMATION.ZIP)
        .click(MissingInfo.ButtonContinue)
        .click(OverviewPage.FinishButton)

    await t.expect(FinishPage.pageTitle.exists).ok()
})