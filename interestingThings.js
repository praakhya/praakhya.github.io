const baseUrl = "./docs"
const pages = [
    {
        name: "Extracting list of Songs from YT Music",
        path: baseUrl + "/SongExtraction/SongExtraction.html",
        cover: "https://images.unsplash.com/photo-1585427670610-6e63ac2093b3?ixlib=rb-4.0.3&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb"
    },
    {
        name: "Making a Custom Notion Widget",
        path: baseUrl + "/MakingANotionWidget/MakingANotionWidget.html",
        cover: "https://images.unsplash.com/photo-1648805777291-a1c45cc26f26?ixlib=rb-4.0.3&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb"
    }
]
function render() {
    const linkContainer = document.getElementById("page-links");
    for (var page_link of pages) {
        const a = document.createElement("a")
        const img = document.createElement("img")
        img.src = page_link.cover
        img.className = "link-img"
        a.appendChild(document.createTextNode(page_link.name))
        a.appendChild(img)
        a.href = page_link.path
        a.className = "page-link"
        linkContainer.appendChild(a)
    }
}
function goToHome() {
    window.location.assign("index.html")
}