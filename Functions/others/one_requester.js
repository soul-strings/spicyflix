const request = require('request');
//set request for some sites
const request_site = (url, headers, callback) => {
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
    request_site,
};
