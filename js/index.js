// // Your code goes here

// const bigLogo = document.querySelector('.logo-heading');
// bigLogo.addEventListener('click', () => {

// });

// console.log(logo);



const reallyFun = document.querySelector("#funBus");
reallyFun.addEventListener("mouseenter", () =>{
    reallyFun.src ="img/charl-folscher-resize.jpg"
   
});
reallyFun.addEventListener("mouseleave", () =>{
    reallyFun.src ="img/fun-bus.jpg"
});

// const theme = document.querySelector('body');
// theme.addEventListener("click", () => {
//     theme.style.backgroundColor="grey"
// })


const burning = document.querySelector("#adventure");
burning.addEventListener("mouseenter", () =>{
    burning.src ="img/outdoors-resize.jpg"
});

burning.addEventListener("mouseleave", () =>{
    burning.src ="img/adventure.jpg"
});

const fun = document.querySelector('#fluid');
fun.addEventListener("click", (event) => {
     fun.src="img/nathan-dumlao-resize.jpg"
     event.stopPropagation();//stop propagation of click event
    })

    fun.addEventListener("dblclick", (event) => {
        fun.src="img/fun.jpg"
        event.stopPropagation();//stop propagation of click event
       })    

const textZoom = document.querySelectorAll('p');
    textZoom[0].addEventListener('mouseenter', () =>{
    textZoom[0].style.transform = "scale(1.3)";     
    textZoom[0].style.transition ="all 0.3s";   
     
 })    

 textZoom[0].addEventListener('mouseleave', () =>{
    textZoom[0].style.transform = "scale(1)";     
    textZoom[0].style.transition ="all 0.3s";    
 })    
//console.log(textZoom);


textZoom[1].addEventListener('click', () =>{
    textZoom[1].style.transform = "scale(1.3)";     
    textZoom[1].style.transition ="all 0.3s";   
    event.stopPropagation();
 })    

 textZoom[1].addEventListener('dblclick', () =>{
    textZoom[1].style.transform = "scale(1)";     
    textZoom[1].style.transition ="all 0.3s";   
    event.stopPropagation(); 
 })   
//  console.log(textZoom[2]);
 textZoom[2].addEventListener('click', () =>{
    textZoom[2].style.color = "blue";     

 })    

 textZoom[2].addEventListener('dblclick', () =>{
    textZoom[2].style.color = "green";     
    
 })  
const navLink = document.querySelectorAll("nav a");
navLink.forEach(element => {
    element.addEventListener('click', function(event){
        event.preventDefault();
        
    }); 
  });




