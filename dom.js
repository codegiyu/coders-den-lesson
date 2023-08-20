const h1Tags = document.getElementsByTagName("h1");
const titleClass = document.getElementsByClassName("title");
const secondTitle = document.getElementById("second-title");
const thirdTitle = document.querySelector(".title");
const allTitles = document.querySelectorAll(".title");
const nick = document.querySelector("h1[data-nickname=hello]")
const child = document.getElementById("boy");

console.log("h1Tags: ", h1Tags);
console.log("titleClass: ", titleClass);
console.log("secondTitle: ", secondTitle);
console.log("thirdTitle: ", thirdTitle);
console.log("allTitles: ", allTitles);

thirdTitle.setAttribute('accessKey', "1234");
console.log("thirdTitle: ", thirdTitle);
console.log("accessKey: ", thirdTitle.getAttribute("accessKey"));
nick.setAttribute("data-nickname", "Prettier");
console.log("data-nickname: ", nick)
console.log(nick.getAttribute("data-nickname"));
console.log(nick.dataset.nickname = "Jesu Oluwa");
console.log(nick.dataset.nickname);
console.log(nick.getAttribute("data-nickname"));
nick.classList.add("five", "six");
console.log(nick);
nick.classList.remove("two", "four");
console.log(nick);

secondTitle.setAttribute("id", "ice cream");
console.log(secondTitle.id)
const testEl = document.getElementById("ice");
console.log(testEl);
// ice-cream
// ice_cream
// ice
// cream
// ""
// / 
// error
// undefined

let obj = {
    name: "Giyu",
    setAttribute(key, value) {
        this[key] = value
    }
}
obj.city = "Abj"
console.log(obj)
obj.setAttribute('country', 'Nigeria')
console.log(obj)

console.log(child.textContent)
console.log(child.innerText);
console.log(child.innerHTML);

// child.textContent = "I'm a man now";
// child.textContent = "I'm a man now. I still live <b>in Abuja as well</b>.<div style='width: 100px; height: 100px; background: blue;'></div> We fit no see sha.";
child.innerHTML = "I'm a man now. I still live <b>in Abuja as well</b>.<div style='width: 100px; height: 100px; background: blue;'></div> We fit no see sha.";

console.log(child.style);
child.style.fontFamily = "cursive";
child.style.textAlign = "right";
child.style.display = "grid";
console.log(child.style.fontSize);

const { width, height, fontFamily, fontSize, display, color, border } = window.getComputedStyle(child);
console.log(width, height, fontFamily, fontSize, display, color, border);