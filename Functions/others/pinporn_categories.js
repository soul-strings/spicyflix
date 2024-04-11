let rang = {
    "535": "Teens",
    "58": "Random",
    "270": "Thick",
    "25": "Milf",
    "592": "Cuckold",
    "32": "Asian",
    "196": "Ass",
    "375": "BDSM",
    "14": "Blowjob",
    "201": "Boobs",
    "190": "Cum",
    "12": "Eboy",
    "327": "Homemade",
    "19": "Lesbian",
    "214": "Onlyfans",
    "226": "TikTok",
    "7": "Anal",
    "287": "Feet",
    "273": "dildo",
    "560": "Gay"
}
//check pin.porn if you want add more thing here

function pinporncategory() {
    const subbesorderre = Object.keys(rang);
    const rank = subbesorderre[Math.floor(Math.random() * subbesorderre.length)];
    const ranname = rang[rank];

    return {
        id: rank,
        name: ranname,
    };
}

module.exports = pinporncategory;