const request = require('request');
require("dotenv").config();
//use this if you have botlist.me things
const botlistme_requester = (server_c, shard_c, id, callback) => {

    const data = {
        shard_count: shard_c,
        server_count: server_c,
    };

    const headers = {
        authorization: process.env.BOTLISTMETOKEN,
        'Content-Type': 'application/json',
    };

    const options = {
        url: `https://api.botlist.me/api/v1/bots/${id}/stats`,
        method: 'POST',
        headers: headers,
        json: true,
        body: data,
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
    botlistme_requester,
};
