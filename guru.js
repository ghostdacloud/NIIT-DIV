// var grandparent = document.querySelector("grandparent");
// var parent = document.querySelector("parent");
// var child = document.querySelector("child");

// grandparent.addEventListener("click",()=>{
//     console.log("grandparent 1")
// })

// grandparent.addEventListener("click",()=>{
//     console.log("grandparant bubble")
// })

// parent.addEventListener("click",()=>{
//     console.log("parent 1")
// })

// parent.addEventListener("click",()=>{
//     console.log("parent bubble")
// })
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})