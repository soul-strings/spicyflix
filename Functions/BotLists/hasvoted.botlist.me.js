const request = require('request');
require("dotenv").config();
//check has voted user
const botlistme_hasvoted = (id, user_id, callback) => {

    const headers = {
        authorization: process.env.BOTLISTMETOKEN,
        'Content-Type': 'application/json',
    };

    const options = {
        url: `https://api.botlist.me/api/v1/bots/${id}/voted?userId=${user_id}`,
        method: 'GET',
        headers: headers,
        json: true,
    };


    request(options, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, body, response);
    });
};

module.exports = {
    botlistme_hasvoted,
};
