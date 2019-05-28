/**
 *  @fileOverview Routes
 *  @author       Maria Elena Rey
 *  @module       Ping router
 *  @requires     express
 *  @requires     express.Router()
*/

const express = require('express');
const router = express.Router();

/**
 * Ping route
 * @name GET ping
 * @path {GET} /ping
 * @response {string} "pong"
 */
router.get('/', function(req, res) {
  res.send('pong');
});

module.exports = router;
