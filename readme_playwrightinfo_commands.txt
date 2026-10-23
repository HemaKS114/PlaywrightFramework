Steps followed:
1. Create a folder with the name "Playwright framework"
2. initialize the project
    npm init -y
3. install playwright:
    npm install -D @playwright/test typescript @types/node
    npx playwright install
4. Configure tsconfig.ts, playwright.config.ts and package.json
5. Create src folder -> pages, testdata, fixtures
6. pages folder -> base page, login page, inventory page, cart page 
    1. Base Page:
        BaseClass is required to initialize every page class(login,register,addtocart) 
        create a constructor with page paramater and it can be used in all the pages we create using super keyword
        Always use export keyword while creating class which helps to inherit the data into other classes
    2. Login Page:
        Always use export keyword while creating class which helps to inherit the data into other classes
        Extend the class with Base page and call the page from base page using super keyword
        Create a private variable for locators and call the base page constructor into login page. 
        create methods of login page
    3.Inventory and Cart page:
        Same as Login Page
7. TestData:
    1.Json:
        I have used json file to maintain our test data based on pages.
        We just need to configure tsconfig.json file with ""resolveJsonModule": true,", this will help us to parse the json file and get the data from it.
        Retrieve the data using fileName.keywordOfEntirefile.keywordOfRequiredField.
8. fixtures:
    Custom page fixture - fixtures are used to set up and provide everything a test needs, such as a browser page, a login page object, test data, or an authenticated session.
    Why fixtures? Without custom fixtures, each test may have to instantiate page classes manually. 
    With fixtures, Playwright provides the page objects whenever your test requests them.
    
    In pagefixture file, 
    create type of fixutre for eg:
        type fixturetypeName=
        {
            fixturename:PageClassName
            loginPage:LoginPage
        }
        //to create custom fixture, we use test.extend.. here we updated test as baseTest
        //we extends the baseTest as per pageFixtures type
        export const test = baseTest.extend<fixturetypeName>({
            loginPage:async({page}, use)=>{
                let loginPage = new Loginpage(page);
                await loginPage.gotoLoginPage();
                await use(loginPage);

            })
        })

9. Report: Playwright report or allure report.
    Playwright report will be automatically genarated, will have screenshots and video in it as evidance.
        command to open the report : npx playwright show-report reports/html-report.
    
    Allure report(Customizable):
        1. Generate Allure HTML report
            npx allure generate allure-results --clean -o allure-report
        2. Open the generated report
            npx allure open allure-report
    Sometimes the report will include the previous execution report too, to resolve that issue, run this command;
        3. to delete the reports in allure-results folder,
            Remove-Item -Recurse -Force allure-results 
        this happens --clean the report folder but not the results folder, to delete the previous results then this command helps
    
    Report customization:
    1. Report customization can be done inside playwright.config.ts under reporter
    2. to update the name of the report, the report generation command has to be updated as below
    To generate report:
            npx allure generate allure-results --clean --name "SwagLabs_TestReport" -o allure-report
    To open report:
            npx allure open allure-report
    
