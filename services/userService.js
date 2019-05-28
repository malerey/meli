/**
 *  @fileOverview Services for getting, creating, updating and deleting user data 
 *  @author       Maria Elena Rey
 *  @module       userService
 *  @requires     fs
*/

const self = {}
const fs = require('fs');
self.filePath = __dirname + '/../commons/users.json';

/**
 * Reads and parses JSON file containing current user list
 * @module getUsers
 * @function
 * @returns {Object} List of all users
*/

self.getUsers = () => new Promise((accept, reject) => {
  fs.readFile(self.filePath, (err, data) => {
    if (err) return reject(err);
    accept(JSON.parse(data));
  });
});

/**
 * Takes a new user and adds it to JSON file
 * @module addUser
 * @function
 * @param {Object} user - Object containing new user information
 * @returns {string} "Success"
*/

self.addUser = (user) => new Promise((accept, reject) => {
  fs.readFile(self.filePath, (err, data) => {
    if (err) return reject(err);
    accept(JSON.parse(data));
    const usersAdded = JSON.parse(data)
    usersAdded.content.push(user)
    fs.writeFile(self.filePath, JSON.stringify(usersAdded), err => {
      if (err) return reject(err);
      accept('Success');
    });
  })
});

/**
 * Removes user from JSON file 
 * @module removeUser
 * @function
 * @param {string} id - Index of user to remove in rendered list and JSON file 
 * @returns {string} "Success"
*/

self.removeUser = (id) => new Promise((accept, reject) => {
  fs.readFile(self.filePath, (err, data) => {
    if (err) return reject(err);
    accept(JSON.parse(data));
    const usersToRemove = JSON.parse(data)
    const filteredUsers = usersToRemove.content.filter((u, i) => i != id);
    const newUsers = { content: filteredUsers }
    fs.writeFile(self.filePath, JSON.stringify(newUsers), err => {
      if (err) return reject(err);
      accept('Success');
    });
  })
});

/**
 * Edits user in JSON file 
 * @module editUser
 * @function
 * @param {string} id - Index of user to edit in rendered list and JSON file 
 * @param {Object} body - Object with new user data 
 * @returns {string} "Success"
*/

self.editUser = (id, body) => new Promise((accept, reject) => {
  fs.readFile(self.filePath, (err, data) => {
    if (err) return reject(err);
    accept(JSON.parse(data));
    const usersToEdit = JSON.parse(data)
    usersToEdit.content[id].name = body.name
    usersToEdit.content[id].lastname = body.lastname
    usersToEdit.content[id].phone = body.phone
    usersToEdit.content[id].email = body.email
    const newUsers = usersToEdit
    fs.writeFile(self.filePath, JSON.stringify(newUsers), err => {
      if (err) return reject(err);
      accept('Success');
    });
  })
});

module.exports = self