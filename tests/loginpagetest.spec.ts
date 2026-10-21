import {expect, test} from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage"

let loginPage:LoginPage;

test("launch the application and test url", async ({page}) => {
    
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    let actualURL = await loginPage.getPageUrl();
    expect(actualURL).toBe("https://www.saucedemo.com/");
    console.log("The URL is : "+actualURL);
    
})

test("test the title of the page", async({page})=>{
    loginPage =new LoginPage(page);
    await loginPage.gotoLoginPage();
    let actualTitle = await loginPage.getPageTitle();
    expect(actualTitle).toBe("Swag Labs");
    console.log("Title of the page is : "+actualTitle);
    
})

test("login to the application", async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.waitUntil();
    await loginPage.fillUserName(process.env.APPUSERNAME!);
    await loginPage.waitUntil();
    await loginPage.fillPassword(process.env.APPPASSWORD!);
    await loginPage.clickOnLogin();
    console.log("Logged in successfully");
    let currentURL = await loginPage.getPageUrl();
    expect(currentURL).toContain("inventory");
    console.log("Entered into Inventory page : "+ currentURL);
    
})

test("login app", async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.toDoLogin(process.env.APPUSERNAME!,process.env.APPPASSWORD!);
    console.log("Logged in successfully");
    let currentURL = await loginPage.getPageUrl();
    expect(currentURL).toContain("inventory");
    console.log("Entered into Inventory page : "+ currentURL);
})


