const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Announcement = db.define("announcement", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  pageType: {
    type: Sequelize.STRING,
  },
  textContent: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageContent: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Announcement;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
