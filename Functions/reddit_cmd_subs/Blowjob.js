let randomsubredditGet = [
    "blowjobs",
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;