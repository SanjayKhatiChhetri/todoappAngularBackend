const { sequelize } = require("./models");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync all models
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
