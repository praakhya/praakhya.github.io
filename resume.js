const skillList = [
    "C",
    "C++ (basic)",
    "Core Java",
    "Python",
    "JavaScript",
    "React",
    "Angular",
    "NodeJS",
    "ExpressJS",
    "REST API(Using NodeJs and Spring Framework)",
    "OOAD",
    "Data Structures",
    "Algorithms",
    "MongoDB",
    "RDBMS (MySQL)",
    "Unix Shell",
    "Spring Framework",
    "Spring boot",
    "JPA",
    "JSON",
    "XML",
  ]
  const projectList = [
    {
      title: "personal art gallery",
      description: "A website that hosts some of my artwork in an organized fashion. Its frontend was designed in Angular13, and backend set up in Firebase. The gallery is hosted here:",
      links: ["https://lifeisasketch.avasthi.com/"]
    },
    {
      title: "carousel",
      description: "A published React component that is a carousel for not just image objects but also any other html components from simple divs to user-defined components. The npm page for the same:",
      links: ["https://www.npmjs.com/package/customizable-horizontal-carousel"]
    },
    {
      title: "algorithms",
      description: "A collection of some popular and important algorithms implemented in C, C++ and python. The GitHub repository for the same:",
      links: [
        "https://github.com/praakhya/dataStructuresAndAlgorithms"
      ]
    },
    {
      title: "parser for verifying CSS language",
      description: "A parser for verifying whether a given CSS code input is accepted by the CSS language or not. The CFG was implemented using Lex and Yacc libraries in python. The GitHub repository for the same:",
      links: ["https://github.com/praakhya/third-semester-automataAst-cfg"]
    },
    {
      title: "a multi-user game using socket programming",
      description: "A multiuser quiz game made using socket programming in python. Up to 10 users can play at the same time. GUI made using Tkinter library in python.",
      links: []
    },
    {
      title: "weather detection system",
      description: "A weather detection system made using raspberry pi and related sensors for hardware and python for software. The device can take readings of PM2.5, PM10, temperature, pressure, humidity etc. Readings are displayed on a html page locally hosted on the raspberry pi as well as on the LED display connected to the device. The GitHub repository for the same",
      links: ["https://github.com/praakhya/SimpleWeatherDetection"]
    },
    {
      title: "database of student forums",
      description: "(Completed on 6th November 2023)\nA student faculty discussion forum for any educational institution implemented using Spring Framework, MySQL and Angular.",
      links: ["https://github.com/praakhya/StudentForums_DBMS_Sem5.git"]
    },
    {
      title: "task manager web app",
      description: "(Completed on 15th November 2023) An application that has productivity features like to do lists, notes, study timers and gentle music. I was tasked to implement a to do list with complete server and database connectivity.",
      links: ["https://github.com/praakhya/task-manager-se", "https://zeme.androiddevelopers.in/"]
    }
  ]
function goToHome() {
    window.location.assign("index.html")
}
function savePdf() {
    window.print()
}
function render() {
    const skillContainer = document.getElementById("skill-list")
    const projectsContainer = document.getElementById("projects")
    for (var skill of skillList) {
        var newPill = document.createElement("div")
        newPill.className = "skill-chip"
        newPill.appendChild(document.createTextNode(skill))
        skillContainer.appendChild(newPill)
    }
    for (var project of projectList) {
        var projectContainer = document.createElement("div")
        projectContainer.className = "project"
        var heading = document.createElement("h1")
        heading.className = "project-title"
        heading.appendChild(document.createTextNode(project.title))
        var para = document.createElement("p")
        para.appendChild(document.createTextNode(project.description))
        projectContainer.appendChild(heading)
        projectContainer.appendChild(para)
        
        for (var link of project.links) {
            console.log(link)
            var a = document.createElement("a")
            a.appendChild(document.createTextNode(link))
            a.href = link
            projectContainer.appendChild(a)
        }
        projectsContainer.appendChild(projectContainer)
    }
}