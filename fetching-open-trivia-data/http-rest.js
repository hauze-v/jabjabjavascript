/* 
  Most asynchronous operations are network related (i.e. making requests)

  Server and Client
  
  When a client talks to the server, that's called an http REQUEST
  When a server talks to the client, that's called an http RESPONSE

  Types of requests you can make:
  Create | Read | Update | Delete (C-R-U-D)
  POST   | GET  | PUT | DELETE

  http status codes
  100 - informational
  200 - success
  300 - redirection
  400 - client error
  500 - server error

  For humans, we get in HTML format but other means of carrying data are through XML and JSON
  Xtensible Markup Language (more flexible) | JavaScript Object Notation

*/

let url = "https://opentdb.com/api.php?amount=25&category=15";

/* Fetch takes in a url and is promise based */
fetch(url)
  .then(result => {
    console.log(result); // this response is not the data, but simply an object
    return result.json();
  })
  .then(data => {
    console.log(data.results); // this is the data
    data.results.forEach(elem => {
      console.log(elem.question);
      console.log(elem.incorrect_answers);
    })
  })