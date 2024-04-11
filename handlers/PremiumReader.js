const { white, green } = require("chalk");

module.exports = (client) => {
    require("./Setup/PremiumRunnder.js")(client);
    console.log(white('[') + green('INFO') + white('] ') + green('Premium Setup ') + white('Events') + green(' Loaded!'));
};