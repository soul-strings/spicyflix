const request = require('request');

const onlytik_requester = (url, headers, callback) => {
    const options = {
        json: true,
        jsonReplacer: true,
        method: 'POST',
        url,
        headers,
        body: {
            limit: 10,
        },
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
    onlytik_requester,
};
