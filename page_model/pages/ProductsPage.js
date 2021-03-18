import { Selector } from 'testcafe'

class ProductsPage{
    constructor(){
        this.pageTitle = Selector('#inventory_filter_container')
        this.BurguerButton = Selector('#react-burger-menu-btn')
        this.LogoutButton = Selector('#logout_sidebar_link')
        this.ShoppingCart = Selector('.shopping_cart_link')
        this.Product1 = Selector('.inventory_item_name').withExactText('Sauce Labs Backpack')
        this.Product2 = Selector('.inventory_item_name').withExactText('Sauce Labs Bike Light')
        this.Product3 = Selector('.inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt')
        this.Product4 = Selector('.inventory_item_name').withExactText('Sauce Labs Fleece Jacket')
        this.Product5 = Selector('.inventory_item_name').withExactText('Sauce Labs Onesie')
        this.Product6 = Selector('.inventory_item_name').withExactText('Test.allTheThings() T-Shirt (Red)')
    }
}

export default new ProductsPage()