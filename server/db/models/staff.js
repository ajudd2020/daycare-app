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
  staffName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  staffRole: {
    type: Sequelize.ENUM("admin", "teacher"),
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
