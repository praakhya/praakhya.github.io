const details = [
  {
    "name":"where to find me",
    "content": [
      {
        "name":"Gmail",
        "links":["mailto:praakhya@avasthi.com"],
        "icon":"assets/logos/gmail.png"
      },
      {
        "name":"Linkedin",
        "links":["https://www.linkedin.com/in/praakhyaavasthi/"],
        "icon":"assets/logos/linkedin.png"
      },
      {
        "name":"Github",
        "links":["https://github.com/praakhya"],
        "icon":"assets/logos/github.png"
      },
      {
        "name":"NPM",
        "links":["https://www.npmjs.com/~parslee"],
        "icon":"assets/logos/npm.png"
      }
    ]
  },
  {
    "name":"coding challenges",
    "content": [
      {
        "name":"Hacker Rank",
        "links":["https://www.hackerrank.com/profile/praakhya",
          "https://www.hackerrank.com/profile/pes1ug21cs413"],
        "icon":""
      },
      {
        "name":"Hacker Earth",
        "links":["https://www.hackerearth.com/@praakhya"],
        "icon":""
      },
      {
        "name":"Leet Code",
        "links":["https://leetcode.com/u/praakhya/"],
        "icon":""
      },
    ],
  },
  {
    "name": "certificates",
    "content": [
      {
        "name": "Supervised Machine Learning: Regression and Classification",
        "links": ["https://www.coursera.org/account/accomplishments/certificate/TCKKX4SHA2WA"],
        "icon": ""
      },
      {
        "name": "Python (Basic)",
        "links": ["https://www.hackerrank.com/certificates/db510819ef87"],
        "icon": ""
      },
      {
        "name": "React Basics",
        "links": ["https://www.coursera.org/account/accomplishments/verify/YNHYMU7XD97P?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"],
        "icon": ""
      },
      {
        "name": "JavaScript Basics",
        "links": ["https://www.coursera.org/account/accomplishments/verify/Z66UJSVU35P7"],
        "icon": ""
      },
    ]
  }

]

function createDetailsTile(detailObj) {
  const div = document.createElement("div");
  div.classList.add("detail-tile");
  const heading = document.createElement("div")
  heading.classList.add("heading")
  heading.textContent = detailObj.name
  const header = document.createElement("div")
  header.classList.add("header")
  const links = document.createElement("div")
  links.classList.add("links")
  for (var link of detailObj.links) {
    a = document.createElement("a")
    a.href = link
    a.text = link
    links.appendChild(a)
  }
  const icon = document.createElement("img")
  if (detailObj.icon) {
    icon.src = detailObj.icon
  }
  icon.classList.add("icon")
  header.appendChild(icon)
  header.appendChild(heading)
  div.appendChild(header)
  div.appendChild(links)
  return div
}
function createDetailBlock(detailBlock) {
  const div = document.createElement("div");
  div.classList.add("detail-block");
  const heading = document.createElement("div")
  heading.classList.add("title")
  heading.textContent = detailBlock.name
  const content = document.createElement("div")
  content.classList.add("content")
  for (var tile of detailBlock.content) {
    content.appendChild(
      createDetailsTile(tile)
    )
  }
  div.appendChild(heading)
  div.appendChild(content)
  document.getElementById("details").appendChild(div)
}

function render() {
    console.log("Rendering")
    document.getElementById("table-of-contents").style.display = "none"
    for (var elem of details) {
      createDetailBlock(elem)
    }
}
function showToc() {
    document.getElementById("table-of-contents").style.display = "flex"
}
function toggleTOC() {
  if (document.getElementById("table-of-contents").style.display === "flex") {
    document.getElementById("table-of-contents").style.display = "none"
  }
  else {
    document.getElementById("table-of-contents").style.display = "flex"
  }
}
function hideToc() {
    document.getElementById("table-of-contents").style.display = "none"
}
