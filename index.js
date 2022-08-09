//keypress
document.addEventListener("keydown", (e)=>{
    console.log(e);
    click(e.key);
    animation(e.key)
})

//click
var button=document.querySelectorAll(".drum");
for (i=0;i<=button.length;i++){
    button[i].addEventListener("click",mous);
}
function mous(){
    var bu=this.innerHTML;
    click(bu);
    animation(bu);
}




function click(keyy){
   
    switch (keyy){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
    
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
        
            default:
                console.log(keyy);
                break;
        }   
    }


function animation(k){

    var klas=document.querySelector("."+k);
    klas.classList.add("pressed");

    setTimeout(function(){
        klas.classList.remove("pressed");
    },100);

}