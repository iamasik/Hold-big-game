'use strict';
let Number=0
let Win=document.querySelector(".Win")
let PlyScore1=document.querySelector(".playerscore1")
let PlyScore2=document.querySelector(".playerscore2")
let P1=document.querySelector(".CS1")
let P2=document.querySelector(".CS2")
let Roll=document.querySelector(".Roll")
let Hold=document.querySelector(".Hold")
let Dise=document.querySelector(".DISC").children
let Count=0
let ply1=0
let ply2=0
let Turn=1
let flag=0


document.querySelector(".New_game").addEventListener("click",function(){
    window.location.reload()
})

function Wins(){
    if(ply1>=100){
        flag=1 
        Win.textContent="Hurreh Player 1 Win!!!!!!!!"
        Win.classList.remove("h1hide")
    }
    else if(ply2>=100){
        flag=1 
        Win.textContent="Hurreh Player 2 Win!!!!!!!!"
        Win.classList.remove("h1hide")
    }
    else{
        flag=0
    }
}

function Save(Value){
    if(Value===1){
        if(Turn===1){
            Chnage()
        }
        else{
            Chnage()
        }
    }
    else{
        if(Turn===1){
            Count=Count+Value
            P1.textContent=Count
        }
        else{
            Count=Count+Value
            P2.textContent=Count
        }
    }
}

function Chnage(){
    if(Turn===1){
        Turn=2
        Count=0
        P1.textContent=Count
        document.querySelector(".pleyer1").classList.toggle("turn")
        document.querySelector(".pleyer2").classList.toggle("turn")
    }
    else{
        Turn=1
        Count=0
        P2.textContent=Count
        document.querySelector(".pleyer2").classList.toggle("turn")
        document.querySelector(".pleyer1").classList.toggle("turn")
    }
}

Hold.addEventListener("click",()=>{
    if(Turn===1){
        ply1=ply1+Count
        PlyScore1.textContent=ply1
        Chnage()
        Wins()
    }
    else if(Turn===2){
        ply2=ply2+Count
        PlyScore2.textContent=ply2
        Chnage()
        Wins()
    }
})
function RemoveAdd(add){
    Dise[0].classList.remove("fa-dice-one","fa-dice-two","fa-dice-three","fa-dice-four","fa-dice-five","fa-dice-six")
    Dise[0].classList.add(add)
}
Roll.addEventListener("click",()=>{
    Number=Math.floor(Math.random()*6+1)
    console.log(Number)
    if(flag===1){
        alert("For play new game click \" New Game Button \" ")
    }
    else{
        if(Number==1){
            RemoveAdd("fa-dice-one")
            Save(1)
        }
        else if(Number===2){
            RemoveAdd("fa-dice-two")
            Save(2)
        }
        else if(Number===3){
            RemoveAdd("fa-dice-three")
            Save(3)
        }
        else if(Number===4){
            RemoveAdd("fa-dice-four")
            Save(4)
        }
        else if(Number===5){
            RemoveAdd("fa-dice-five")
            Save(5)
        }
        else if(Number===6){
            RemoveAdd("fa-dice-six")
            Save(6)
        }
    }
})