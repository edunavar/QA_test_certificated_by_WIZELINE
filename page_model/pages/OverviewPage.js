import { Selector } from 'testcafe'

class OverviewPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.FinishButton = Selector('.btn_action').withExactText('FINISH')
    }
}

export default new OverviewPage()