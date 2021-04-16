const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.addEventListener('click', headsOrTails);

function headsOrTails(){
    let generateRandom = Math.random();
    /*let generateRandom = Math.floor(Math.random()*2);*/
    console.log (generateRandom);
    if(generateRandom> 0.5){
        result.innerHTML  = "Heads";
    }else{
        result.innerHTML  = "Tails";
    }

}