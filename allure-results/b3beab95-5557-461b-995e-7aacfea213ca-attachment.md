# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagetest.spec.ts >> launch the application and test url
- Location: tests\loginpagetest.spec.ts:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://www.saucedemo.com/"
Received: "Swag Labs"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {expect, test} from "@playwright/test"
  2  | import { LoginPage } from "../src/pages/LoginPage"
  3  | 
  4  | let loginPage:LoginPage;
  5  | 
  6  | test("launch the application and test url", async ({page}) => {
  7  |     
  8  |     loginPage = new LoginPage(page);
  9  |     await loginPage.gotoLoginPage();
  10 |     let actualURL = await loginPage.getPageTitle();
> 11 |     expect(actualURL).toBe("https://www.saucedemo.com/");
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |     console.log("The URL is : "+actualURL);
  13 |     
  14 | })
  15 | 
  16 | 
```