
function createBubble(){
    // number of particle
    let numOfParticle = 150;
    let place = window.innerWidth;

    // for loop to create particle and assining value
    for (let i = 0; i < numOfParticle; i++) {

    // assiging the random position to the particle depending upon width of browser
    let position = Math.floor(Math.random() * place);

    // assinging the random size to the particle
    const sizeDots = Math.floor(Math.random() * 4) + 1;

    // assiging the random dealy to each particle
    let delay = Math.floor(Math.random() * 8);
    
    // createing the element
    let div = document.createElement("div");

    // desiging the dots
    div.style.backgroundColor="#fff";
    div.style.height = sizeDots + "px";
    div.style.width = sizeDots + "px";
    div.style.borderRadius = "50%";
    div.style.left = position + "px";

    // if the size of the dots is greater 
    // than 3 then speed will vary
    if(sizeDots>3){
        var speed = 17;
    }else{
        var speed = 10;
    }
    div.style.animation = `moveup ${speed}s infinite linear`;

    // delay the animation
    div.style.animationDelay = delay + "s";

    // append the child into the body
    document.body.append(div); 
    }
}

// function to create bubble
createBubble();


// will help to change position after 17 seconds
setInterval(() => {
   createBubble(); 
}, 17000);
