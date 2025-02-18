const myimage = document.querySelector("img");
myimage.addEventListener("click", function () {
  const mysrc = myimage.getAttribute("src");
  if (mysrc === "images/hyouka.jpg") {
    myimage.setAttribute("src", "images/hyouka1.jpg");
  } else {
    myimage.setAttribute("src", "images/hyouka.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("please enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `hey their, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hey their, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
