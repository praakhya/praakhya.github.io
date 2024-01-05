var elem = document.getElementById('rotate');
elem.style.height = "15%"
window.addEventListener('scroll', function () {
    var value = window.scrollY * 0.25;
    elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`;
}, {capture: true});
var imgElem = document.getElementById("carousel-image");
currentImg = 0;
var images = [
    "https://drive.google.com/uc?export=view&id=18w4Zi9nPRH2wGBVshVTzVDQrhqNkdxvY",
    "https://drive.google.com/uc?export=view&id=12RC6o2LEuCaCLV6S4oqY1naWe2klBFd7",
    "https://drive.google.com/uc?export=view&id=1l3U6AdR0zpp4m4iSii-hnP9EPUi-KkCS",
    "https://drive.google.com/uc?export=view&id=1RjqrRuQ9SqLHeCrWxPydsIc6A1QPWenb",
    "https://drive.google.com/uc?export=view&id=1vQijjtvVvGtYKBO9uBMu8-ZPu_3xhlNf",
    "https://drive.google.com/uc?export=view&id=1SgFKZuKEEBy5lW24-PQ7DnBefpqTINLd",
    "https://drive.google.com/uc?export=view&id=1QuMFq8l0k6_Vzj1--lomduxh7lpSAoAX",
    "https://drive.google.com/uc?export=view&id=1FoRFPO4LDhhoPm5HhXdDZ5IcgW8oK9Xx",
    "https://drive.google.com/uc?export=view&id=1En5C4prL019bOVezHJmkOF5u3dxwG1-F"
];
initialise()

function initialise() {
    console.log(this.images[0]);
    setInterval(() => {
        this.currentImg = this.currentImg + 1;
        if (this.currentImg > this.images.length - 1) {
            this.currentImg = 0;
        }
        imgElem.src = this.images[this.currentImg];
    }, 3000);
}


function setVisible(target) {
    target.hidden = false;
}
function goToGit(url) {
    window.open(url, "_blank");
}