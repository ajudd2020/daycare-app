const User = require("./user");
const GeneralPage = require("./generalPage");
const Announcement = require("./announcement");
const Newsletter = require("./newsletter");
const Staff = require("./staff");
const Class = require("./class");
// const TextBlock = require("./textBlock");

Class.hasMany(Staff);
Staff.belongsTo(Class);

// Stubbing out potential many-to-many relationship
/**
 * Class.belongsToMany(Staff, { through: StaffClasses, uniqueKey: "staff_class" });
 * Staff.belongsToMany(Staff, { through: StaffClasses, uniqueKey: "staff_class" });
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  GeneralPage,
  Announcement,
  Newsletter,
  Staff,
  Class,
};
