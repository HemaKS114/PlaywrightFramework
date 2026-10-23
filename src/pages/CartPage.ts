

import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./InventoryPage";


export class CartPage extends BasePage
{

    private readonly cartButton;
    private readonly checkoutButton;
    private readonly firstname_checkout;
    private readonly lastname_checkout;
    private readonly postalcode_checkout;
    private readonly continue_checkout;
    private readonly finish_checkout;
    private readonly thankyouMsg;
    private readonly successfulCheckoutMsg;

    constructor(page:Page){
        super(page);

        this.cartButton = page.locator("//div[@id='shopping_cart_container']");
        this.checkoutButton = page.locator("#checkout");
        this.firstname_checkout = page.getByPlaceholder("First Name");
        this.lastname_checkout = page.getByPlaceholder("Last Name");
        this.postalcode_checkout = page.getByPlaceholder("Zip/Postal Code");
        this.continue_checkout = page.locator("//input[@id='continue']");
        this.finish_checkout = page.locator("//button[@id='finish']");
        this.thankyouMsg = page.locator("//h2[@class='complete-header']");
        this.successfulCheckoutMsg = page.locator("//div[@class='complete-text']");

    }

    async cartPageCheck(): Promise<void>
    {
        await this.cartButton.click();
        
    }

    async navigatetoCheckoutPage():Promise<void>
    {
        await this.checkoutButton.click();
    }

    async enterCheckoutInfo(us_c:string, ls_c:string, pc:string):Promise<void>
    {
        await this.firstname_checkout.fill(us_c);
        await this.lastname_checkout.fill(ls_c);
        await this.postalcode_checkout.fill(pc);
        console.log("First Name is : "+us_c + " Last Name is : "+ ls_c + " postal code is : "+pc);
        
    }

    async continueCheckoutmethod():Promise<void>
    {
        await this.continue_checkout.click();
    }

    async finishCheckoutMethod():Promise<void>
    {
        await this.finish_checkout.click();
        let thankyouMsg = await this.thankyouMsg.innerText();
        expect(thankyouMsg).toContain("Thank you for your order!");

        console.log("Order is placed and received the msg : "+thankyouMsg);
        

        let successful_Checkout_msg = await this.successfulCheckoutMsg.allInnerTexts();
        expect(successful_Checkout_msg).toContain(`Your order has been dispatched, and will arrive just as fast as the pony can get there!`);

        console.log("Entire check out msg is : "+successful_Checkout_msg);
        
    }


}