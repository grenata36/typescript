
import { IEvent } from "../interfaces/IEvents";

enum EventTheme {
  Musical = "Musical",
  Jazz = "Jazz",
  Acoustic = "Akusztikus zene"
}

export class Event implements IEvent {
  public id: string;
  public location: string;
  public date: Date;
  public participants: string[];
  public eventTheme: EventTheme[];

  constructor(id: string, location: string, date: Date, participants: string[], eventTheme: EventTheme[]) {
    this.id = id;
    this.location = location;
    this.date = date;
    this.participants = participants;
    this.eventTheme = eventTheme;
  }

  addParticipant(participant: string): void {
    this.participants.push(participant);
  }

  editEvent(details: Partial<IEvent>): void {
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

  findEventsByTheme(events: Event[], theme: EventTheme): Event[] {
    return events.filter(event => event.eventTheme.includes(theme));
  }

  deleteEvent(events: Event[], eventId: string): Event[] {
    return events.filter(event => event.id !== eventId);
  }

}


