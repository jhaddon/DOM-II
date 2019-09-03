// Your code goes here

// Create TEN UNIQUE event listeners

// Event Listener 1 - click
// Uses querySelector instead of querySelectorAll so only the first button responds

const changeBG = document.querySelector('.btn');
changeBG.addEventListener('click', (e) => {
  document.body.style.backgroundColor = "teal"
})

// Event Listener 2 - mouseover

const imgScale = document.querySelector(".intro img");
imgScale.addEventListener("mouseover", e => {
  imgScale.style.transform = 'scale(1.3)';
  imgScale.style.transition = ' transform 0.5s';
});

// Event Listener 3 - mouseleave

const scaleDown = document.querySelector('.intro img');
scaleDown.addEventListener("mouseleave", e => {
    scaleDown.style.transform = 'scale(1.0)';
    scaleDown.style.transition = ' transform 0.5s';
  });

// Event Listener 4 - dblclick

const titleText = document.querySelector(".logo-heading");
titleText.addEventListener("dblclick", e => {
  titleText.innerText = 'Funner Bus';
});

// Event Listener 5 - load

window.addEventListener('load', (e) => {
    alert('What a long strange trip it\'s been');
  });

// Event Listener 6 - contextmenu

const rightClick = document.querySelector('.content-destination');
rightClick.addEventListener('contextmenu', (e) => {
  e.target.style.border = '2px dashed black';
});

// Event Listener 7 - resize

window.addEventListener("resize", (e) => {
    const header = document.querySelector('.main-navigation');
    header.style.background = `#FFEBCD`;
});

// Event Listener 8 - mouseover

const destination = document.querySelector('.destination');
destination.addEventListener('mouseover', (e) => {
  e.target.style.background = 'teal';
});

// Event Listener 9 - scroll

const navFlip = document.querySelector(".nav");
window.addEventListener("scroll", (e) => {
    navFlip.style.marginLeft = "200px";
    navFlip.style.transform= "rotate(180deg)";
})

// Event Listener 10 - drag

const imgDrag = document.querySelectorAll("img");
imgDrag.forEach( (e) => {
    e.addEventListener('dragstart', function(event){
        console.log("Image Dragged")
    })
});