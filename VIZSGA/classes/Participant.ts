import { IParticipant } from "../interfaces/Iparticipant";

export class Participant implements IParticipant{         //résztvevő
    public participantId: string;
    public participantName: string;
    public email: string;
    public telephone: number;

    constructor (participantId:string, participantName:string, email:string, telephone:number) {
        this.participantId = participantId;
        this.participantName = participantName;
        this.email = email;
        this.telephone = telephone;
    }

}
