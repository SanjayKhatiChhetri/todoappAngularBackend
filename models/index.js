const sequelize = require("../config/database");
const User = require("./user.model");
const Todo = require("./todo.model");

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Todo,
};
