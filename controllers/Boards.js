'use strict';

var utils = require('../utils/writer.js');
var Boards = require('../service/BoardsService');

module.exports.apiBoardsBoardIdGET = function apiBoardsBoardIdGET (req, res, next, boardId) {
  Boards.apiBoardsBoardIdGET(boardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBoardsGET = function apiBoardsGET (req, res, next) {
  Boards.apiBoardsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
