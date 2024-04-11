const request = require('request');

// you can check fikfuq api to make some other changes here according to your needs

const fikfud_requester = (url, group, discover, a_type, headers, rn_s, callback) => {
    const bodyData = {
        "a": a_type,
        "skip": rn_s,
        "limit": 12,
        "id": 0,
        "sort": 1,
        "author": "",
        "discover": discover,
        "category": group,
        "filter": "videos"
    };

    const options = {
        json: true,
        jsonReplacer: true,
        method: 'POST',
        url,
        headers,
        body: bodyData
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
    fikfud_requester,
};
