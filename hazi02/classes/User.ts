//Felhasználó

export class User {
    private userID: string;
    private name: string;
    private email: string;

    constructor(userID:string, name:string, email:string){
        this.userID = userID;
        this.name = name;
        this.email = email;
    }
}