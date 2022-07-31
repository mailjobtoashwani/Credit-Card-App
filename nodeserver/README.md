# node-express-rest-api-example

A Basic Node.js/Express/Sqllight3(in-memory) REST API


# Prerequisites

For Windows

# Usage

* Run `npm install` to installl dependencies
* Run `npm run start` to start the local server
* Load `http://localhost:12001/` to test the endpoint. It will display a json result `{"message":"Ok"}`

# API Endpoints

## GET /cards/getAll (as per given in the use case contradicting RESTful)

Get a list of cards users

```json
{
  "message": "success",
  "data": {"rows":[{"card_id":1,"name":"Alice","card_number":"1111 2222 3333 4444","balance":-1000,"card_limit":2000},{"card_id":2,"name":"Bob","card_number":"4444 3333 2222 1111","balance":-10.24,"card_limit":5000}]}
}
```

## POST /cards/add (as per given in the use case contradicting RESTful)

To create a new user based on POST data (x-www-form-url-encoded)

* name: User name
* card number: card number
* limit: number

valid credit Number: card number is valid (e.g  79927398713)











