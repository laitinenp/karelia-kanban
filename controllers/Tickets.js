'use strict';

var utils = require('../utils/writer.js');
var Tickets = require('../service/TicketsService');

module.exports.apiBoardsBoardIdTicketsGET = function apiBoardsBoardIdTicketsGET (req, res, next, boardId) {
  Tickets.apiBoardsBoardIdTicketsGET(boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBoardsBoardIdTicketsTicketIdGET = function apiBoardsBoardIdTicketsTicketIdGET (req, res, next, ticketId, boardId) {
  Tickets.apiBoardsBoardIdTicketsTicketIdGET(ticketId, boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
