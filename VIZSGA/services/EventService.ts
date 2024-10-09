
import { IEvent } from "../interfaces/IEvents";

export class Event implements IEvent {
  public id: string;
  public name: string;
  public location: string;
  public date: Date;
  public participants: string[];

  constructor(id: string, name: string, location: string, date: Date, participants: string[]) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.date = date;
    this.participants = participants;
  }

  addParticipant(participant: string): void {
    this.participants.push(participant);
  }

  editEvent(details: Partial<IEvent>): void {
    if (details.name !== undefined) {
      this.name = details.name;
    }
    if (details.location !== undefined) {
      this.location = details.location;
    }
    if (details.date !== undefined) {
      this.date = details.date;
    }
    if (details.participants !== undefined) {
      this.participants = details.participants;
    }
  }

  

  deleteEvent(events: Event[], eventId: string): Event[] {
    return events.filter(event => event.id !== eventId);
  }

}


