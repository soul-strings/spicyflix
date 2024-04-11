let randomsubredditGet = [
    "GoneWild",
    "PetiteGoneWild",
    "gonewildstories",
    "GoneWildTube",
    "treesgonewild",
    "gonewildaudio",
    "GWNerdy",
    "gonemild",
    "altgonewild",
    "gifsgonewild",
    "analgw",
    "gonewildsmiles",
    "onstageGW",
    "RepressedGoneWild",
    "bdsmgw",
    "UnderwearGW",
    "LabiaGW",
    "TributeMe",
    "WeddingsGoneWild",
    "gwpublic",
    "assholegonewild",
    "leggingsgonewild",
    "dykesgonewild",
    "goneerotic",
    "snapchatgw",
    "gonewildhairy",
    "gonewildtrans",
    "gonwild",
    "ratemynudebody",
]

function get_res() {
    const randomIndex = Math.floor(Math.random() * randomsubredditGet.length);

    const randomChoice = randomsubredditGet[randomIndex];
    return randomChoice
}
module.exports = get_res;