"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var EventTheme;
(function (EventTheme) {
    EventTheme["Musical"] = "Musical";
    EventTheme["Jazz"] = "Jazz";
    EventTheme["Acoustic"] = "Akusztikus zene";
})(EventTheme || (EventTheme = {}));
class Event {
    constructor(id, location, date, participants, eventTheme) {
        this.id = id;
        this.location = location;
        this.date = date;
        this.participants = participants;
        this.eventTheme = eventTheme;
    }
    addParticipant(participant) {
        this.participants.push(participant);
    }
    editEvent(details) {
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
    findEventsByTheme(events, theme) {
        return events.filter(event => event.eventTheme.includes(theme));
    }
    deleteEvent(events, eventId) {
        return events.filter(event => event.id !== eventId);
    }
}
exports.Event = Event;
