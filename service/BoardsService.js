'use strict';


/**
 * Returns a single board
 *
 * boardId UUID 
 * returns Board
 **/
exports.apiBoardsBoardIdGET = function(boardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "B123",
  "name" : "Karelia Kanban API",
  "description" : "Create an implementation for this API",
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


/**
 * Returns a list of available boards
 *
 * returns List
 **/
exports.apiBoardsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "B123",
  "name" : "Karelia Kanban API",
  "description" : "Create an implementation for this API",
  "responsiblePerson" : {
    "userId" : 123,
    "forename" : "Gina",
    "surname" : "Lollobrigida",
    "username" : "gina",
    "password" : "sosecret",
    "email" : "gina@somemail.com"
  }
}, {
  "id" : "B123",
  "name" : "Karelia Kanban API",
  "description" : "Create an implementation for this API",
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

