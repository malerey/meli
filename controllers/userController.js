/**
 *  @fileOverview Controllers for user information.
 *  @author       Maria Elena Rey
 *  @module       userController
 *  @requires     services/userService.js
 *  @requires     commons/validations.js
*/

const self = {};
const userService = require('../services/userService');
const VALIDATIONS = require('../commons/validations');

/**
 * Renders current user list
 * @module getList
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @static
 */

self.getList = (req, res, next) => {
  userService.getUsers().then(users => {
    res.render('list', users);
  })
    .catch((err) => {
      err.code = 500;
      err.message = 'No pudimos cargar los usuarios.';
      next(err)
    });
};

/**
 * Validates user data, then adds user to existing file and redirects to user list
 * @module addUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @static
 */

self.addUser = (req, res, next) => {
  if (!VALIDATIONS.VALID_NAME.test(req.body.name)
    || !VALIDATIONS.VALID_NAME.test(req.body.lastname)
    || !VALIDATIONS.VALID_EMAIL.test(req.body.email)
    || !VALIDATIONS.VALID_PHONE.test(req.body.phone)) {
    res.render('error', { error: { name: 'validation_error', status: 'error' } })
    return;
  }
  else {
    userService.addUser(req.body).then(() => {
      res.redirect('/user/list');
    })
      .catch((err) => {
        err.code = 500;
        err.message = 'No pudimos agregar el usuario';
        next(err)
      });
  };
};

/**
 * Removes single user, then redirects to current user list
 * @module removeUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @static
 */


self.removeUser = (req, res, next) => {
  userService.removeUser(req.params.id).then(() => {
    res.location('/user/list');
  })
    .catch((err) => {
      err.code = 500;
      err.message = 'No pudimos borrar al usuario';
      next(err)
    });
};

/**
 * Edits single user, then redirects to current user list
 * @module removeUser
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @static
 */

self.editUser = (req, res, next) => {
  userService.editUser(req.params.id, req.body).then(() => {
    res.redirect('/user/list');
  })
    .catch((err) => {
      err.code = 500;
      err.message = 'No pudimos editar al usuario';
      next(err)
    });
};

module.exports = self;
