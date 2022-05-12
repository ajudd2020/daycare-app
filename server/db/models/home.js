const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Home = db.define("home", {
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

module.exports = Home;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
