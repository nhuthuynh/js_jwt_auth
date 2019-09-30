This project developed by using TDD 
    1. express -> web framework for node
    2. body-parser -> middleware to handle incoming requests as JSON
    3. mocha -> test framework
    4. chai -> assertion library for mocha
    5. chai-http -> to send requests for our API from our tests
    6. jsonwebtoken -> to generate JWT
    7. morgan -> logging coming requests
    8. nodemon -> to auto restart server automatically when files change (optional)

    ------------------------------------------------------------------------------------------------
    create express based API which handling requests to store new users, authenticate and return valid token (JWT) using to protect private routes for our app.
        GET - / -> return simple message - public
        POST - /register -> create new user in database - public
        POST - /login -> validate user and return token - public
        GET - /profile -> request user profile, need a valid token - private
    
    In mocha, describe() function used to group unit tests from a specific domain/feature and each one is defined in it() function
    chai-http allows use to create request to our server

    1. Empty project 
        -> Create a simple test to check express is existed -> run test -> failed.
        -> Fix by add app.js in src folder and import express, init express instance and export, run test -> passed.
    2. Create simplest public route
        -> Create a test to check GET request for route api / -> run test -> failed.
