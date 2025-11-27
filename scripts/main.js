// Image switcher code

const myImage = document.querySelector("img");

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/firefox_logo.png") {
//         myImage.setAttribute("src", "images/firefox2_icon.svg");
//     } else {
//         myImage.setAttribute("src", "images/firefox_logo.png");
//     }
// };

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox_logo.png") {
        myImage.setAttribute("src", "images/firefox2_icon.svg");
    } else {
        myImage.setAttribute("src", "images/firefox_logo.png");
    }
})

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// myButton.onclick = () => {
//     setUserName();
// }

myButton.addEventListener("click", () => {
    setUserName();
});