const icon1 = document.querySelector("#icon1")
const icon2 = document.querySelector("#icon2")
const list = document.querySelector("#list")

icon1.addEventListener("click", () =>{
    list.style.display = "block"
    icon1.style.display = "none"
    icon2.style.display = "block"
})

icon2.addEventListener("click", () =>{
    list.style.display = "none"
    icon1.style.display = "block"
    icon2.style.display = "none"
})

