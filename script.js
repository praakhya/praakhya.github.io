function render() {
    console.log("Rendering")
    document.getElementById("table-of-contents").style.display = "none"
}
function showToc() {
    document.getElementById("table-of-contents").style.display = "flex"
}
function hideToc() {
    document.getElementById("table-of-contents").style.display = "none"
}