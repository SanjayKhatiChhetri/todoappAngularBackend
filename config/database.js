const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  //using connection string
  process.env.DATABASE_URL,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
