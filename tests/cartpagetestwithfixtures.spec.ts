import { LoginPage } from "../src/pages/LoginPage";
import { InventoryPage } from "../src/pages/InventoryPage";
import { CartPage } from "../src/pages/CartPage";
import {test, expect} from "../src/fixtures/pagefixtures";
import loginpageData from "../src/testData/loginpageData.json";
import checkoutpageData from "../src/testData/checkoutpageData.json"

test("Checkout the back pack", async({loginPage, inventoryPage, cartPage})=>{

    await loginPage.toDoLogin(loginpageData.validUser.username, loginpageData.validUser.password);
    await inventoryPage.checkPagedetails();
    await inventoryPage.addBackPacktoCart();
    await cartPage.cartPageCheck();
    await cartPage.navigatetoCheckoutPage();
    await cartPage.enterCheckoutInfo(checkoutpageData.checkOutInfoData.firstname, checkoutpageData.checkOutInfoData.lastname, checkoutpageData.checkOutInfoData.postalcode);
    await cartPage.continueCheckoutmethod();
    await cartPage.finishCheckoutMethod();
})