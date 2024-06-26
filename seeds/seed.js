const sequelize = require("../config/controllers");
const seedPosts = require("./postData");
const seedComments = require("./commentData");
const seedUsers = require("./userData");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers({ individualHooks: true, returning: true });
    await seedPosts();
    await seedComments();
    process.exit(0);
}

seedAll();
