import { test, APIResponse, expect, request } from "@playwright/test";
import { json } from "node:stream/consumers";




test("Verify_the_GET_request", async({request})=>{

    let response:APIResponse = await request.get("https://jsonplaceholder.typicode.com/users");
    // let response:APIResponse = await request.get("https://www.saucedemo.com");

    console.log("status code is : "+response.status());
    console.log("Status message is : "+response.statusText());
    console.log("URL : "+ response.url());
    console.log("content-type" + response.headers()['content-type']);

    
    //assertions
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");


    // const rBody = await response.json();
    // console.log(rBody);
    
    // const rBodyText = await response.text();
    // console.log(rBodyText);
})

test("verify the GET request of API using Base URL", async({request})=>{



    let response:APIResponse = await request.get("/users");
    console.log("status code is : "+response.status());
    console.log("Status message is : "+response.statusText());
    console.log("URL : "+ response.url());
    console.log("content-type" + response.headers()['content-type']);

    //assertions
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");


    // const rBody = await response.json();
    // console.log(rBody);
    
    // const rBodyText = await response.text();
    // console.log(rBodyText);
})

test("verify GET resquest using path and query parameters", async({request})=>{

    let username = "username=Aaron";

    let response:APIResponse = await request.get(`/users`,{params:username});
    console.log("status code is : "+response.status());
    console.log("Status message is : "+response.statusText());
    console.log("URL : "+ response.url());
    console.log("content-type" + response.headers()['content-type']);

    let jsonResponse = await response.json();
    console.log(jsonResponse);

    //Id check
    expect(jsonResponse).toHaveProperty("id");
    expect(jsonResponse.id).toEqual(expect.any(Number));
    expect(jsonResponse.id).toBe(11);


})