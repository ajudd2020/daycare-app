const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Staff = db.define("staff", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  pageType: {
    type: Sequelize.STRING,
  },
  pageId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  staffBio: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Staff;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
