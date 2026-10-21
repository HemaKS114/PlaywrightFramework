
import {test, expect} from "../src/fixtures/pagefixtures.js"
import { LoginPage } from "../src/pages/LoginPage.js";
import loginpageData from "../src/testData/loginpageData.json"


test("verify the page title", async({loginPage})=>{
    let pageTitle = await loginPage.getPageTitle();
    console.log("The page title is : "+pageTitle);


})

test("verify the url", async({loginPage})=>{
    let pageURL = await loginPage.getPageUrl();
    console.log("The page url is  : "+ pageURL);
    
})

test("Login with fixtures", async({loginPage})=>{

// await loginPage.fillUserName(process.env.APPUSERNAME!);
// await loginPage.fillPassword(process.env.APPPASSWORD!);
// await loginPage.clickOnLogin();
await loginPage.toDoLogin(process.env.APPUSERNAME!, process.env.APPPASSWORD!);
console.log("Logged in successfully");
let currentURL = await loginPage.getPageUrl();
expect(currentURL).toContain("inventory");
console.log("Entered into Inventory page : "+ currentURL);


})

test("login with json test data", async({loginPage})=>{

    // await loginPage.fillUserName(loginpageData.validUser.username);
    // await loginPage.fillPassword(loginpageData.validUser.password);
    // await loginPage.clickOnLogin();
    await loginPage.toDoLogin(loginpageData.validUser.username, loginpageData.validUser.password);
    console.log("Logged in successfully");
    let currentURL = await loginPage.getPageUrl();
    expect(currentURL).toContain("inventory");
    console.log("Entered into Inventory page : "+ currentURL);
})

test("login with invalid username", async({loginPage})=>{
    // await loginPage.fillUserName(loginpageData.invalidUser.username);
    // await loginPage.fillPassword(loginpageData.invalidUser.password);
    // await loginPage.clickOnLogin();
    await loginPage.toDoLogin(loginpageData.invalidUser.username, loginpageData.invalidUser.password);
    await loginPage.errorMsgCheck();
    
})

test("login with invalid password", async({loginPage})=>{
    // await loginPage.fillUserName(loginpageData.invalidUser.username);
    // await loginPage.fillPassword(loginpageData.invalidUser.password);
    // await loginPage.clickOnLogin(); 
    await loginPage.toDoLogin(loginpageData.invalidPassword.username, loginpageData.invalidPassword.password);
    await loginPage.errorMsgCheck();
})