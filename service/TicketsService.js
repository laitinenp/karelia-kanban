'use strict';


/**
 * Returns a list of tickets inside a board
 *
 * boardId UUID 
 * returns List
 **/
exports.apiBoardsBoardIdTicketsGET = function(boardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "T123",
  "name" : "Create a node server",
  "desicription" : "using the GenerateServer tools in the Swagger editor",
  "dueDate" : "2023-06-30",
  "responsiblePerson" : {
    "userId" : 123,
    "forename" : "Gina",
    "surname" : "Lollobrigida",
    "username" : "gina",
    "password" : "sosecret",
    "email" : "gina@somemail.com"
  }
}, {
  "id" : "T123",
  "name" : "Create a node server",
  "desicription" : "using the GenerateServer tools in the Swagger editor",
  "dueDate" : "2023-06-30",
  "responsiblePerson" : {
    "userId" : 123,
    "forename" : "Gina",
    "surname" : "Lollobrigida",
    "username" : "gina",
    "password" : "sosecret",
    "email" : "gina@somemail.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a single ticket
 *
 * ticketId UUID 
 * boardId UUID 
 * returns Ticket
 **/
exports.apiBoardsBoardIdTicketsTicketIdGET = function(ticketId,boardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "T123",
  "name" : "Create a node server",
  "desicription" : "using the GenerateServer tools in the Swagger editor",
  "dueDate" : "2023-06-30",
  "responsiblePerson" : {
    "userId" : 123,
    "forename" : "Gina",
    "surname" : "Lollobrigida",
    "username" : "gina",
    "password" : "sosecret",
    "email" : "gina@somemail.com"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

