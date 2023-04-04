const container = document.getElementById("container");
const cursor = document.getElementById("cursor");

let num_row = 20;
let num_hexagon = 25;

for (let i = 1; i <= num_row; i++) {
    const div = document.createElement("div");
    div.id = `row${i}`;
    if(i%2==0){
        div.style.marginLeft = "-37px";
    }
    div.classList.add("row")
    container.appendChild(div); 

    for (let i = 1; i <= num_hexagon; i++) {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");
        div.appendChild(hexagon);
    }
}

setInterval(() => {
    let x = Math.floor(Math.random() * 1300) + 0;
    let y = Math.floor(Math.random() * 700) + 0;
    if(x!=0 || y!=0){
        cursor.style.visibility = "visible";
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        cursor.style.transition = '1s';
    }
},2000);


// used to get mouse coordinate 
// window.addEventListener("mousemove",(e)=>{
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log(x,y);
// })



let path = document.querySelector('path');

let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
 
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', ()=>{
    var scrollPercentage = (document.documentElement.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0.4;

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    console.log(scrollPercentage);


})

