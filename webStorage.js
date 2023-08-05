const setBtn = document.getElementById("set-btn");
const getBtn = document.getElementById("get-btn");
const removeBtn = document.getElementById("remove-btn");
const clearBtn = document.getElementById("clear-btn");
const storedItem = document.getElementById("stored-item");


let index = 0
console.log(sessionStorage.getItem("indexArray") || "[]")
console.log(JSON.parse("[]"))
let arrayOfIndexes = JSON.parse(sessionStorage.getItem("indexArray") || "[]")
const user = {
    name: "Awesome Guy",
    email: "awesomeguy@yahoo.com",
    id: "EDR-890",
    token: "vi8aoh3p9tu89agv78gvujknoih89289grqg973g"
}

// sessionStorage.setItem("indexArray", arrayOfIndexes)
sessionStorage.setItem("car", "Toyota")
sessionStorage.setItem("sell", "$89")
sessionStorage.setItem("dex", "high")
sessionStorage.setItem("rouse", "8789348tgu98h")

setBtn.addEventListener("click", () => {
    index++
    storedItem.innerHTML = index
    arrayOfIndexes.push(index)
    // const userJson = JSON.stringify(user)
    // sessionStorage.setItem("user", userJson)
    sessionStorage.setItem("indexArray", JSON.stringify(arrayOfIndexes))

}) 

getBtn.addEventListener("click", () => {
    let indexValue = sessionStorage.getItem("carouselIndex")
    console.log(indexValue)
    storedItem.innerHTML = indexValue
})

removeBtn.addEventListener("click", () => {
    sessionStorage.removeItem("rouse")
})

clearBtn.addEventListener("click", () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    console.log(loggedInUser)

    setTimeout(() => {
        if (loggedInUser.token) {
            window.location.href = "winner.html"
        }
    }, 6000)
})