import {test, expect} from "../src/fixtures/pagefixtures"
import { LoginPage } from "../src/pages/LoginPage"
import { InventoryPage } from "../src/pages/InventoryPage"
import loginpageData from "../src/testData/loginpageData.json"


test("Check inventory page title", async({loginPage, inventoryPage})=>{

await loginPage.toDoLogin(loginpageData.validUser.username, loginpageData.validUser.password);
await inventoryPage.checkPagedetails();

})

test("add Back pack to the cart", async({loginPage, inventoryPage})=>{
    await loginPage.toDoLogin(loginpageData.validUser.username, loginpageData.validUser.password);
    await inventoryPage.addBackPacktoCart();
})

