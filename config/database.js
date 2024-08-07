const { Sequelize } = require("sequelize");
require("dotenv").config();

//for development ***DO NOT COMMIT THIS TO GITHUB***
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
// });
// for production
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
