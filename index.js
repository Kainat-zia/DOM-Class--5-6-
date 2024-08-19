// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes)


// let Head = document.getElementById("heading")
// Head.style.color = "blue";
// Head.style.backgroundColor = 'black';
// Head.style.fontSize = "65px";
// Head.style.border = "4px solid orange";

// let paragraph = document.getElementsByClassName("para")

// paragraph[2].innerHTML = "DOM Manipulation"
// paragraph[0].style.color = "orange";
// paragraph[0].style.backgroundColor = "yellow"
// paragraph[1].style.color = "green";
// paragraph[1].style.backgroundColor = "black"
// paragraph[1].style.fontSize = "65px";

// let collection = document.getElementsByClassName("container")
// collection[1].style.color = "brown"

// let collect = document.getElementsByTagName("li")
// document.getElementById("demo").innerHTML = collect[1].innerHTML
// document.getElementById("demo").innerHTML = collect[2].innerHTML

// function changecolor(newcolor){
//     const btn = document.getElementById("para")
//     btn.style.color = newcolor
// }
// document.querySelector("p").style.backgroundColor = "pink" 






// class 2 
// const elements = document.getElementById("intro");

// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + elements.innerHTML;



// const element = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element[0].innerHTML;


// //  for div (id)
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// //  for div (by classname . for class we also assign indexes bcz classes are many)
// const a = document.getElementsByClassName("container")
// const firstpara = a[0]
// const b = firstpara.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "container" is:  ' + b[0].innerHTML;

// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;


// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 1) with class="intro" is: ' + x[1].innerHTML;


//  set time out function
// document.write ("hellow world")
// setTimeout(() => {
//      alert ("I am inside set time out")
// }, 3000);





// class 3

// let button = document.getElementById("btn")
// button.addEventListener("click",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("contextmenu",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("dblclick",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mousedown",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseenter",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseleave",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseout",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })
// button.addEventListener("mouseup",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// ................keyboard events...............
// button.addEventListener("keydown",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
//      console.log(e .key);
// })

// button.addEventListener("keyup",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// console.log(e .key);
// })
// button.addEventListener("keypress",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// console.log(e .key);
// })

// function myFunction(){
//      let y = document.getElementById ("fname");
//      y.value = y.value.toUpperCase();
// }
// function myfunction1(){
//       alert("you pressed a key inside a box")
// }
// function myfunction2(){
//     document.getElementById ("email").innerHTML = "you pressed a key inside it"
//     document.getElementById ("email").style.color = 'red'
// }






// class 4
// wed
// for each loop . hum apna function pass kr rhy  used for  ararys  item or index js ko pta hota h k arrays k liye kaam horha ha


// let text ="";
// const fruits = ["apple","orange","peach","mango"];
// fruits.forEach(myFruits)
// document.write(text);

// function myFruits(item ,index) {
//     text = text +index+ ":"+item + "<br>"
// }

// let sum = 1;
// const number = [1, 2, 3, 4]
// number.forEach(myNumber);
// document.write(number)

// function mynumber(item){
  
//     sum = sum + item;

// }
// function myNumber(item , index , arr){
//      arr[index] = item * 20; 
// }



// RANDOM COLOR GENERATOR
// function RandomColor(){
//     let val1 = Math.ceil(200 + Math.random() * 255);
//     let val2 = Math.ceil(200 + Math.random() * 255);
//     let val3 = Math.ceil(200 + Math.random() * 255);
//    return `rgb(${val1},${val2},${val3})`;
// }

// // refernce k liye dollar sign zruri h

// setInterval(() => {
//       document.querySelector("body").style.background = RandomColor();

// }, 1000);



// create a togle button that change a screen to dark-mode, when clicked and light-mode when clicked again

// let modeBtn = document.querySelector("#modeBTN");
// let currentMode = "light";

// modeBtn.addEventListener("click", () =>{
//     if(currentMode === "light"){
//         currentMode = "dark"
//         document.querySelector("body").style.backgroundColor= "black";
//     }
//     else{
//         currentMode = "light";
//         document.querySelector("body").style.backgroundColor= "white";
//     }
//     console.log(currentMode);
// })




//  class  5 monday

// handle event object: it is special object that has detailed about event
// it is denoted by e

// let button1 = document.querySelector("#btn1")
// button1.addEventListener("dblclick",(e) =>{
//     console.log(e);
//     console.log(e.type);  
//     console.log(e.clientX); // x axis HORIZONTAL
//     console.log(e.clientY); // y axis VERICAL
// })



// let button2 = document.querySelector("#btn2")
// button2.addEventListener('click', () => {
//     console.log("this is handler 1");
// })


// button2.addEventListener('click', () => {
//     console.log("this is handler 2");
// })

// const handler3 = ()=>{
//     console.log("thid is handler 3");
// }

// // button2.addEventListener('cick',handler3)
// button2.removeEventListener('cick',handler3)

// button2.addEventListener('click', () => {
//     console.log("this is handler 4");
// })


// arrow function javascript ki memory m jaa k store hojaty hain. as a user hidden hoty hain
// const myDiv = document.getElementById("myDIV");
// myDiv.addEventListener("mousemove", myFunction);

// function removeHandler() {
//   myDiv.removeEventListener("mousemove", myFunction);
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }





//  class 6 monday

// function example
// const multiplication = (length, bredth) =>{
//  return  length * bredth
// } 
// console.log(multiplication(4,6));


// function sum(a,b){
//   return a + b
// }
// console.log(sum ( 3,3));

// DOM Manipulation ( Attributes : put source on image , class , id src , placeholder, input name , these all are attributes)
//  let div_element = document.querySelector("div");
// //  console.log(div_element);

// let att = div_element.getAttribute("class")
// console.log("att");



// // set attribute(DOM)                           replace

// let paragraph = document.querySelector("p");
// console.log(paragraph.setAttribute("id" ,"paragraph_one"));


// const element = document.getElementById("myH1"); 
// let text = element.getAttribute("class"); 
// document.getElementById("demo").innerHTML = text;

// Adding nodes: nodes "p" is nodes
// let paragraph = document.querySelector("p");
// paragraph.style.backgroundColor = "blue" ;
// paragraph.style.color = "orange"

//  DOM (insert element)
// node.append(el)
// node.prepend(el)
// node.before(el)
// node.after(el)


let newBtn = document.createElement("button")
newBtn.innerText = "submit"
console.log(newBtn);

let add = document.querySelector("div")
add.prepend(newBtn)


 