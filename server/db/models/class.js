const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Class = db.define("class", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  pageType: {
    type: Sequelize.STRING,
  },
  className: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  classSummary: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  classSchedule: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Class;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
