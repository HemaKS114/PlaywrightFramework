import { LoginPage } from "../pages/LoginPage"
import {test as baseTest, } from "@playwright/test"



type pageFixtures ={
    //fixturename:PageClassName
    loginPage:LoginPage;

}

//to create custom fixture, we use test.extend.. here we updated test as baseTest
//we extends the baseTest as per pageFixtures type


export const test = baseTest.extend<pageFixtures>({
    loginPage:async({page},use)=>{
        let loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await use(loginPage);
    }
})

export {expect} from "@playwright/test"