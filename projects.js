const tetragon = document.getElementById("open-tetragon")
const bck = document.getElementById("back")
bck.addEventListener("click", () => {
    document.location.href = "index.html"
})
tetragon.addEventListener("click", openTetragon)
function openTetragon() {
    window.open("https://eliel-iscool47.github.io/tetragon/", "_blank")
}
tetragon.addEventListener("click", openTetragon)