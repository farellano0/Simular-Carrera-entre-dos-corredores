import Dice from './dice.js';
import Participant from './participants.js';

let d1 = new Dice();
let p1 = new Participant("Simon");
let p2 = new Participant("Molly");
let position = 0;
let turno = 1;

while(position < 100){
    console.log(`Turno ${turno}---------------------`);
    //Simon
    let shift1 = Dice.toShift(d1.toRoll());
     p1.uploadPosition(shift1)

    console.log(p1.getName() + " esta en la casilla " + p1.getPosition());

    //Molly
    let shift2 = Dice.toShift(d1.toRoll());
    p2.uploadPosition(shift2);

    console.log(`${p2.getName()} esta en la casilla ${p2.getPosition()}`);
    turno++;
    
    if(p1.getPosition() > p2.getPosition()){
        position = p1.getPosition();
    } else {
        position = p2.getPosition();
    }

    if(p1.getPosition() >= 100 && p2.getPosition() >= 100){
        console.log("Empate")
    } else if(p1.getPosition() >= 100 && p2.getPosition() < 100){
        console.log("Simon ganó la carrera");
    } else {
        console.log("Molly ganó la carrera");
    }
}


