import { Event } from "./EventService";

export class Participant extends Event{         //résztvevő
    public participantId: string;
    public participantName: string;
    public email: string;
    public adress: string;
    public telephone: number;

    constructor (id:string, name:string, location:string, date:Date, participants:string[], eventTheme:string,  participantId:string, participantName:string, email:string, adress:string, telephone:number) {
        super(id, name,location, date, participants, eventTheme)
        this.participantId = participantId;
        this.participantName = participantName;
        this.email = email;
        this.adress = adress;
        this.telephone = telephone;
    }
}
