let name = document.querySelector("#name")
let age = document.querySelector("#age")
let profession = document.querySelector("#profession")
let city = document.querySelector("#city")
let image = document.querySelector("#image")
let bio = document.querySelector("#bio")


document.querySelector("#btn-1").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(name.value);
    

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
})