/**
 *  @fileOverview Routes
 *  @author       Maria Elena Rey
 *  @module       Index router
 *  @requires     express
 *  @requires     express.Router()
*/

const express = require('express');
const router = express.Router();

/**
 * Index route
 * @name GET index
 * @path {GET} /
 * @response {html} render index
 */

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
