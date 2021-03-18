import { Selector } from 'testcafe'

class MissingInfo{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.FirstNameField = Selector('input[id="first-name"]')
        this.LastNameField = Selector('input[id="last-name"]')
        this.Zip_PostalCodeField = Selector('input[id="postal-code"]')
        this.ButtonContinue = Selector('input[class="btn_primary cart_button"]')
        this.ButtonCancel = Selector('.cart_cancel_link btn_secondary')
        this.errorMessage = Selector('.error-button')

    }
}

export default new MissingInfo()