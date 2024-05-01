const item1 = document.getElementById("item1")
const dropDown = document.getElementById("dropdown")

item1.addEventListener("click" , ()=>{
    if(dropDown.classList.contains("d-none")){
        dropDown.classList.remove("d-none")
    }
    else{
        dropDown.classList.add("d-none")
    }
})

const dessert = document.getElementById("dessert")
const dropDownDe = document.getElementById("dropdown-dessert")


dessert.addEventListener("click" , ()=>{
    if(dropDownDe.classList.contains("d-none")){
        dropDownDe.classList.remove("d-none")
    }
    else{
        dropDownDe.classList.add("d-none")
    }
})