# HTTP and REST API #
HTTP stands for Hyper-Text-Transfer-Protocol

A server is just a program that is constantly listening for requests.

You as a client, send HTTP requests to servers (like Twitter) and then that server checks a database and generates an HTTP response and sends it back to the user client.

HTTP request method types
  GET --> Read
  POST --> (Create)
  PUT --> (Update)
  DELETE --> (Delete)

These make up the CRUD apps.

What's an API?
  - Application Programming Interface
  - A set of rules that allow a piece of code (softwares) to talk to each other

What's a REST API?
  - REpresentational State Transfer
  - An architectural style we follow to create the aforementioned API on the server side
  - Just a set of rules we follow when we create APIs on the server side, because there are many ways to create APIs. It's just a standard

Examples of API
  - Google Maps API
  - Uber, Lyft and thousands of more companies use google maps api
  - Twilio API
  - Companies like AirBnb, Dell, Hulu, Yelp, Sony etc use Twilio's API to send thousands of automated messages/ alerts to customers.
  - Instead of starting from scratch, companies use other companies APIs. They leverage existing software and allow two softwares to join.
  - API calls = API requests.

API Tracking && Authentication
  - API keys
  - oAuth
  - JSON web tokens
  - In order to track who is using, how much of the API and track how many requests people make, companies use API keys.
  - When we create the API on the server side, we DON'T create an API key. We instead create the functionality for the clients to create their own API key.
  - Anyone that wants to use an API will have to generate & register an API key. And then every time we make a request, we send that API key along so the owner of the API can verify and track.
  - JSON web tokens are an alternative to API keys, as are oAuth.
  