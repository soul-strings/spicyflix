let randomsubredditGet = [
    "legalteens",
    "collegesluts",
    "adorableporn",
    "legalteensXXX",
    "gonewild18",
    "18_19",
    "just18",
    "PornStarletHQ",
    "fauxbait",
    "barelylegalteens",
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;