import { Selector } from 'testcafe'

class OnlyProduct{
    constructor(){
        this.pageTitle = Selector('.header_label')//with text "Swag Labs"
        this.BackButton = Selector('.inventory_details_back_button')//.withExactText('<- Back')
        this.AddCart = Selector('.btn_primary').withExactText('ADD TO CART')
        this.Remove = Selector('.btn_secondary').withExactText('REMOVE')

    }
}

export default new OnlyProduct()