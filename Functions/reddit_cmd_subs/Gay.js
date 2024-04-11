let randomsubredditGet = [
    "gayporn",
    "gaybrosgonewild",
    "gaycumsluts",
    "gay_sex_videos",
    "shemale_sex_videos",
    "gay_solo_sex"
    //fuck all gays
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;