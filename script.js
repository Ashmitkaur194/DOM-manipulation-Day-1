let btn=document.getElementById("button");
console.dir(btn);

btn.onclick=function(){
    alert("button is clicked");
}

let p=document.getElementById("box");
p.addEventListener("mouseenter",function (){
    console.log("mouse inside box");
});



//let btn=document.querySelector('button');

// btn.onclick=function(){
//     alert("button was clicked");
// }

// function sayHello()
// {
//     alert("Hello ji")
// }

// btn.onclick=sayHello;

// let btns=document.querySelectorAll("button");

// for(btn of btns)
// {
    // btn.onclick=sayHello;
    // btn.onmouseenter=function(){
    // console.log("Ashmit");

    // btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked")
//     })
// }


// let para = document.querySelector("p");
// para.addEventListener("click",function(){
//     console.log("para was clicked");

//     para.addEventListener("mouseover",function(){
//         console.log("over me!   ")
//     })
// })

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box")
// })

// let h1=document.querySelector("h1");
// h1.addEventListener("click",function(){
//     this.style.backgroundColor="green";

//     h1.addEventListener("click",function()
//     {
//     console.dir(this.innerText);
//     }
// )})



// let h3=document.querySelector("h3");
// h3.addEventListener("click",function(){
//     this.style.backgroundColor="pink";
// })


// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log("form submitted");


// let inp=document.querySelector("input");
// console.dir(inp);
// console.log(inp.value );

// let pwd=document.querySelector("#password")
// console.log(pwd.value);

// let da=document.querySelector("#date");
// console.log(da.value);

// });



