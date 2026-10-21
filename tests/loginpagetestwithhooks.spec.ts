import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

let loginPage: LoginPage;

test.beforeEach("launch app", async({page})=>{

    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    console.log("Application launched successfully");
    
})

test("login to the application", async({page})=>{
    await loginPage.fillUserName(process.env.APPUSERNAME!);
    await loginPage.fillPassword(process.env.APPPASSWORD!);
    await loginPage.clickOnLogin();
    let actualURL = await loginPage.getPageUrl();
    expect(actualURL).toContain("inventory");
    console.log("Logged in successful and the url is : "+actualURL);
})



