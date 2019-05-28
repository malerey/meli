/**
 *  @fileOverview Routes
 *  @author       Maria Elena Rey
 *  @module       User router
 *  @requires     express
 *  @requires     express.Router()
 *  @requires     controllers/userController.js
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const VALIDATIONS = require('../commons/validations')

/**
 * User list route
 *
 * @name GET form
 * @path {GET} /user/list
 * @response {html} Renders user list
 */

router.get('/list', userController.getList);

/**
 * Form route
 *
 * @name GET form
 * @path {GET} /user/form
 * @response {html} Renders user registration form
 */

router.get('/form', function(req, res, next) {
  res.render('form', { VALIDATIONS: VALIDATIONS } );
});

/**
 * Add new user route. Redirects to /user/list
 *
 * @name POST addUser
 * @path {POST} /user
 * @body {string} name
 * @body {string} lastname
 * @body {string} phone
 * @body {string} email
 * @response {string} "success"
 */

router.post('/', userController.addUser);


/**
 * Remove user route. Redirects to /user/list
 *
 * @name DELETE removeUser
 * @path {DELETE} /user/remove/:id
 * @params {string} id 
 * @response {string} "Success"
 */

router.delete('/remove/:id', userController.removeUser);


/**
 * Edit user route. Redirects to /user/list
 *
 * @name POST editUser
 * @path {POST} /user/edit/:id
 * @params {string} id 
 * @response {string} "Success"
 */

router.post('/edit/:id', userController.editUser)

module.exports = router;
