let os = prompt("What is your OS")
let vidTubeURL = "/media/removable/Code/code/VidTube/index.html"
let vidTubeMac = "/Volumes/Code/code/VidTube/index.html"
vidTubeURL = (os == "MacOS") ? vidTubeMac : vidTubeURL;
if (os = "ChromeOS") {
 homeDir = "/"
}
function vidTube() {
 result.innerHTML = vidTubeURL
}
