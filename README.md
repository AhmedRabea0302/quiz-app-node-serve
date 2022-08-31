# Nagwa Quiz Server App

Nagwa quiz sever app is a nodeJs&Express Backend App Skeleton for handling API Requests.

## Installation
1. Make sure you have installed node on your machine.
2. Download The Repo.
3. Hit Command: $ cd repo-name
4. Hit Command: $ node app.js
5. Start using your endpoints.

## Usage

- Your project will now be running on port 3000 
so your base url would be: http://localhost:3000

- we have two endpoints here the first one is : 
    "/api/get-random-words" it's a 'GET' request.
    it returns us a new array of different ten words.

- The other endpoint would be get: "/api/calculate-rank/:score".
    it takes the final score and returns the student rank.