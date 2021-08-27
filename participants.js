export default class Participant {
    constructor(name){
        this._name = name;
        this._position = 0;
    }

    getName(){
        return this._name;
    }
    setName(name){
        this._name = name
    }

    getPosition(){
        return this._position;
    }
    setPosition(number){
        this._position = number;
    }

    uploadPosition(number){
        this._position += number;

        return this._position;
    }
}