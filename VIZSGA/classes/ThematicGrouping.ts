import { Event } from "../services/EventService";

enum EventTheme {
    Musical = "Musical",
    Jazz = "Jazz",
    Acoustic = "Akusztikus zene"
  }
  
  export class ThematicGroup extends Event {
    public eventTheme: EventTheme[];
  
    constructor(id: string, name: string, location: string, date: Date, participants: string[], eventTheme: EventTheme[]) {
      super(id, name, location, date, participants);
      this.eventTheme = eventTheme;
    }
}
  