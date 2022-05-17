const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

/**
 * Note: Long term goal is to make this more dynamic for the user. I.e. not a fixed number of text blocks or images.
 * Currently, one image and one text block which will be placed in a fixed place on the page.
 * In the future, it would be nice to have the ability to add a text block in one spot, an image in another.
 * This would require seperate tables with FK to the page as well as more front end work.
 * For now, MVP simply is a page with a fixed template with options for text and image.
 */

const Newsletter = db.define("newsletter", {
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
    allowNull: false,
  },
  textContent: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
  imageContent: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Newsletter;

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
