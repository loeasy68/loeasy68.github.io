//Inits
let os = prompt("What is your OS")
let vidTubeURL = "/media/removable/Code/code/VidTube/index.html"
let vidTubeMac = "/Volumes/Code/code/VidTube/index.html"
let loGamesURL = "/media/removable/Code/code/LoGames/index.html"
let loGamesMac = "/Volumes/Code/code/LoGames/index.html"

// Check OS
vidTubeURL = (os == "MacOS") ? vidTubeMac : vidTubeURL;
loGamesURL = (os == "MacOS") ? loGamesMac : loGamesURL;

// Functioms
function vidTube() {
 result.innerHTML = vidTubeURL
}
function loGames() {
 result.innerHTML = loGamesURL
}
