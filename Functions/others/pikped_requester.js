const request = require('request');

const pikped_requester = (url, headers, callback) => {
    const options = {
        json: true,
        jsonReplacer: true,
        method: 'GET',
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
    pikped_requester,
};
