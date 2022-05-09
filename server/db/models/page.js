const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
  }
})

module.exports = Page

/**
 * instanceMethods
 */


/**
 * classMethods
 */

/**
 * hooks
 */
