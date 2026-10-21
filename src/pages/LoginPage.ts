import {Page, expect} from "@playwright/test"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage{

    private readonly userName;
    private readonly password;
    private readonly loginButton;
    private readonly errorMsg;



    constructor(page:Page){
        super(page);

        this.userName = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("input#login-button");
        this.errorMsg = page.getByRole("alert");

    }

    async gotoLoginPage(): Promise<void>
    {
        await this.page.goto("/");
    }

    async fillUserName(un:string) : Promise<void>
    {
        await this.userName.fill(un);
    }
    async fillPassword(pwd:string) : Promise<void>
    {
        await this.password.fill(pwd);
    }

    async clickOnLogin():Promise<void>
    {
        await this.loginButton.click();
    }

    async toDoLogin(un:string, pwd:string){
        // await this.page.goto("/");
        await this.fillUserName(un);
        await this.fillPassword(pwd);
        await this.loginButton.click();
    }

    async errorMsgCheck(){
        let exactErrorMsg = await this.errorMsg.innerText();
        expect(exactErrorMsg).toContain("Epic sadface: Username and password do not match any user in this service");
        console.log("Actual error msg is : "+exactErrorMsg);
        
    }

}