import { Selector } from 'testcafe'

class ShoppingCart{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.ContinueShoppingButton = Selector('.btn_secondary').withExactText('Continue Shopping')
        this.CheckoutButton = Selector('.btn_action')//.withExactText('CHECKOUT')
    }
}

export default new ShoppingCart()