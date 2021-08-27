export default class Dice {
    toRoll(){
        return Math.ceil(Math.random()*6);
    }

    static toShift(number){
        if(number == 1 || number == 2){
            return 1;
        } else if (number == 3){
            return 3;
        } else {
            return 2;
        }
    }
}