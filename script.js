var loader_div = document.querySelector(".loader_div");
var second_cont = document.querySelector(".c2");
var body = document.querySelector("body");


second_cont.style.display='None';


window.addEventListener("load",()=>{
    loader_div.style.display='None';
    second_cont.style.display='block';
    AOS.init();
})