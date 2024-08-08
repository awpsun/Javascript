export default class user {
    constructor(email, name){
        this._id = email;
        this._name = name;
    }
    //adding a method to the calss
    greeting(){
        return `Hi, My name is ${this._name}.`
    }
}