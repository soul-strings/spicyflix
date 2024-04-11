let randomsubredditGet = [
    "girlsinyogapants",
    "stockings",
    "legs",
    "tightshorts",
    "buttsandbarefeet",
    "feet",
    "datgap",
    "thighhighs",
    "thickthighs",
    "thighdeology"
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;