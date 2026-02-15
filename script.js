const container = document.getElementById("container")
const header = document.getElementById("header")
const content = document.getElementById("content")
const footer = document.getElementById("footer")
const githubButton = document.getElementById("github-button")
function openGitHub() {
    window.open("https://github.com/Eliel-isCool47", "_blank")
}
githubButton.addEventListener("click", openGitHub)
const games = document.getElementById("games-button")
function openProjects() {
    document.location.href = "games.html"
}
games.addEventListener("click", openProjects)

let age = Math.floor((Date.now() / 86400000 / 365.25) - (53 / 365.25)) - 43
content.innerHTML = `Welcome to my website! I am a ${age} year old student who loves programming and technology. I created this website to share my projects and ideas with the world. (gemini wrote this, but it's pretty damn accurate)
				<br /> Feel free to explore and check out my projects (the buttons below).`