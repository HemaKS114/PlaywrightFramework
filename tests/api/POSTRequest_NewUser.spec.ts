import {APIResponse, expect, test} from "@playwright/test"

test("Post request to  add new user", async({request})=>{

    let newUser = {
        "name": "Aaron Finch",
        "username": "Aaron",
        "email": "testing@abc.com",
        "address": {
            "street": "Tada",
            "suite": "143",
            "city": "Chennai",
            "zipcode": "400015",
            "geo": {
                "lat": "43.9509",
                "lng": "34.4618"
            }
        },
        "phone": "7894561230",
        "website": "google.com",
        "company": {
            "name": "MyOwn"
        }
    }

    let response:APIResponse = await request.post(`/users`,{headers:{"Content-Type":"application/json"}, data:newUser});

    expect(response.status()).toBe(201);

    expect(response.statusText()).toBe("Created");

    console.log(response.status());
    console.log(response.statusText());
    
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    //Id check
    expect(jsonResponse).toHaveProperty("id");
    expect(jsonResponse.id).toEqual(expect.any(Number)); 

    //username check
    expect(jsonResponse).toHaveProperty("username");
    expect(jsonResponse.username).toEqual(expect.any(String)); 
    expect(jsonResponse.username).toBe("Aaron");
    console.log("Username is matched: "+jsonResponse.username);

    //name
    expect(jsonResponse).toHaveProperty("name");
    expect(jsonResponse.name).toEqual(expect.any(String));
    expect(jsonResponse.name).toBe("Aaron Finch");
    console.log("Full name is : "+jsonResponse.name);

    //email
    expect(jsonResponse).toHaveProperty("email");
    expect(jsonResponse.email).toEqual(expect.any(String));
    expect(jsonResponse.email).toBe("testing@abc.com");
    console.log("Full name is : "+jsonResponse.email);

    

    

})