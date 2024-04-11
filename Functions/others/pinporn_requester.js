const request = require('request');

const pinporn_requester = (url, headers, callback) => {
    const options = {
        json: true,
        jsonReplacer: true,
        url,
        headers,
    };

    request(options, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, body);
    });
};

module.exports = {
    pinporn_requester,
};
