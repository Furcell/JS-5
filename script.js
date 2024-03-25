"use strict";

// HomeWork - 5

//დავალება #1
let divID = document.querySelector("#block1");
divID.classList.add("wraper",);

let divClass = document.querySelector(".wraper");
let element = document.createElement("img");

element.textContent = "Hello";
element.setAttribute("src","https://imgs.search.brave.com/0UY2qPSV8pWV8YcArj2ir5aPct6MzZDEWbM-FlsvHlM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNzc5/MzE2NDUvcGhvdG8v/d29tYW4tYW5kLXlv/dW5nLWdpcmwtb3V0/ZG9vcnMtd2l0aC1w/ZW9wbGUtaW4tYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bG5V/UWZnTHlVZ21HUHR6/NkZzYXRIWVNub3dZ/Xzl3YmRQUXVYZmI4/WDNxQT0")
element.setAttribute("alt","image")

let h2 = document.createElement("h2")
h2.textContent = "image title";
h2.classList.add("title");
h2.style.backgroundColor = "red";
h2.style.fontSize = "30px";

document.querySelector(".wraper").appendChild(element);
document.querySelector(".wraper").appendChild(h2);

//დავალება #2 
let divBox = document.querySelectorAll(".box1");

divBox.forEach(function(item){    //forEeach-ით გადავუვლით ყველა ელემენტს.
    let itemP = document.createElement("p");
    itemP.textContent = "hello";
    itemP.classList.add("text")

    item.appendChild(itemP);
})








