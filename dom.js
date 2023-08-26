const h1Tags = document.getElementsByTagName("h1");
const titleClass = document.getElementsByClassName("title");
const secondTitle = document.getElementById("second-title");
const thirdTitle = document.querySelector(".title");
const allTitles = document.querySelectorAll(".title");
const nick = document.querySelector("h1[data-nickname=hello]")
const child = document.getElementById("boy");
const gridPapa = document.querySelector(".grid-container");
const gridMama = document.getElementsByClassName("grid-container")[1];
const [indexInput, colorInput] = document.getElementsByClassName("input");
const fileInput = document.getElementById("file");
const btn1 = document.getElementById("btn-1");
const btn2 = document.querySelector("#btn-2");
const imgBox = document.querySelector(".selected-image").firstElementChild;

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

console.log("Last Child: ", child.lastChild);
console.log("Last Element Child: ", child.lastElementChild);

console.log(child.style);
child.style.fontFamily = "cursive";
child.style.textAlign = "right";
child.style.display = "grid";
console.log(child.style.fontSize);

const { width, height, fontFamily, fontSize, display, color, border } = window.getComputedStyle(child);
console.log(width, height, fontFamily, fontSize, display, color, border);

let box;
let text;
let content;
for (let i = 0; i < 10; i++) {
    box = document.createElement("div");
    box.className = "box yellow"
    box.setAttribute("id", `box-${i}`)
    box.style.width = "100%"
    box.style.height = "150px";

    text = document.createElement("p");
    text.textContent = i;

    box.appendChild(text)

    gridPapa.appendChild(box);

    content =   `<div 
                    class="box blue" 
                    id="box-${i}"
                    style="width: 100%, height: 150px"
                >
                    <p>${i}</p>
                </div>`
    gridMama.innerHTML += content;
}

fileInput.addEventListener('change', selectImage);
btn1.addEventListener('click', changeBoxColor);
btn2.addEventListener('click', deleteLastBox);

function deleteLastBox() {
    const lastChild = gridPapa.lastElementChild;
    const lastChild2 = gridMama.lastElementChild;

    gridPapa.removeChild(lastChild);
    gridMama.removeChild(lastChild2);
}

function changeBoxColor() {
    const index = Number(indexInput.value);
    const color = colorInput.value;
    const target = gridPapa.children[index];

    console.log("Target: ", target);

    if (target) {
        target.style.background = color;
        console.log("target exists");
    }

    indexInput.value = "";
    colorInput.value = "";
}

function selectImage(event) {
    const image = event.target.files[0];
    console.log(image);

    const imgVal = URL.createObjectURL(image);
    console.log(imgVal);

    imgBox.src = imgVal
}