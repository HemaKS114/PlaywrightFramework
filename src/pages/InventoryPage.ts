import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage
{

    private readonly productPage;
    private readonly backpackNamecheck;
    private readonly addtoCartbutton_backPack;
    private readonly removefromCartbutton_backPack;
    private readonly cartButton;


    constructor(page:Page){
        super(page);

        this.productPage = page.locator("//span[contains(.,'Products')]");
        this.backpackNamecheck = page.locator("//a[@id='item_4_title_link']");
        this.addtoCartbutton_backPack = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.removefromCartbutton_backPack = page.locator("//button[@id='remove-sauce-labs-backpack']");
        this.cartButton = page.locator("//div[@id='shopping_cart_container']");

    }

    async checkPagedetails():Promise<void>
    {
        let inventorypageCheck = await this.productPage.innerText();
        expect(inventorypageCheck).toContain("Products");
        console.log("Actual data available in Inventory page : "+inventorypageCheck);

    }

    async backPackNameCheck():Promise<void>
    {
        let backPackavailabilityCheck = await this.backpackNamecheck.innerText();
        expect(backPackavailabilityCheck).toBe("Sauce Labs Backpack");
        console.log("The Back pack name is : "+backPackavailabilityCheck);
    }

    async addBackPacktoCart():Promise<void>
    {

        await this.checkPagedetails();
        await this.backPackNameCheck();
        await this.addtoCartbutton_backPack.click();
        await this.removefromCartbutton_backPack.isVisible();
        await this.cartButton.click();
        await this.backPackNameCheck();


    }


}