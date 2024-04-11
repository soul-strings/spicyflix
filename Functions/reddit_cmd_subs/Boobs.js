let randomsubredditGet = [
    "boobies",
    "TittyDrop",
    "boltedontits",
    "boobbounce",
    "boobs",
    "downblouse",
    "homegrowntits",
    "cleavage",
    "breastenvy",
    "youtubetitties",
    "torpedotits",
    "thehangingboobs",
    "page3glamour",
    "fortyfivefiftyfive",
    "tits",
    "amazingtits",
    "titstouchingtits",
    "pokies",
    "titfuck",
    "clothedtitfuck"
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;