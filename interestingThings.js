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
    },
    {
      name: "Useful Tools for Beginners in Computer Science",
      path: baseUrl + "/UsefulTools/Useful Tools for Beginners in Computer Science.html",
      cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
    },
    {
      name: "A Two Day Build",
      path: baseUrl + "/ATwoDayBuild/ATwoDayBuild.html",
      cover: "https://images.unsplash.com/photo-1639431682289-72b9ebb75895?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
    },
    {
      name: "Building Big Things with Little Experience",
      path: "https://praakhya.substack.com/p/building-big-things-with-little-experience",
      cover: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd51f8493-a158-4599-ac87-dba193d6756c_2240x1260.png"
    },
    {
      name: "Planning an Idea",
      path: "https://praakhya.substack.com/p/planning-an-idea",
      cover: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa8f3e27f-4813-4479-b70a-f770bad85d0e_2800x1980.png"
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
