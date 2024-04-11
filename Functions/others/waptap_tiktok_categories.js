let ranwaptaptiktokcat = {
    // "id": "name" , (name)
    //check waptap.com to find out this profiles and add them here
    "tiktoknsfw": "6360c25288bc57b6900fa1c9",
    "tiktok": "6352f2235b9c940b540cad77",
    "tiktokmujereslindas": "656cccd57bed68ae600edbfb",
    "tiktoker": "65a0067b6cddd8ed290c9797",
    "tiktok18+": "656a185474f2b36ed40a4c22",
    "tiktokxxx": "652e56937a3595fb550865a0",
    "tiktokthots": "656b4a24186c7a1a130195b2",
    "tiktokisdead": "63ac46acd7fe8016fa011fa4",
    "tiktokxxl": "652e568e7a3595fb55086514",
    "tiktoknsfw": "6365518dc076e8be1e0b01c3",
    "tiktokhot": "637d28b59a0170eda50ef323",
    "tiktokplus11": "6358b5a72e30e16d60047aa2",
    "tiktoknsfwlover": "635edae3e96249d34f0fc612",
    "toktok": "65b559df46d0d9bafc023712",
    "tiktik": "638a4ec03a3d263a750f3b9f",
    "titokzoli": "65afc72b6038f3b89e013db5",
}

function waptaptiktokran() {
    const keys = Object.keys(ranwaptaptiktokcat);
    const ranid = keys[Math.floor(Math.random() * keys.length)];
    const ranname = ranwaptaptiktokcat[ranid];


    return { name: ranname, id: ranid };
}

module.exports = waptaptiktokran;