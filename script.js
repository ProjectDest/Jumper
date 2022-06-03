 var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function() {
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        character.style.animation = "none";
        character.style.display = "none";
        alert("Sorry, you lost! Reload to try again!")
        playerscore = 0;
        
    }
},10); 

let score = document.querySelector("#score");
let interval = null;
let playerscore = 0;
let scoreCounter = ()=>{
    playerscore++;
    score.innerHTML = `Score <b>${playerscore}</b>`;
}
interval = setInterval(scoreCounter,200);
