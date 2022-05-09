const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const TextBlock = db.define("textBlock", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = TextBlock;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
