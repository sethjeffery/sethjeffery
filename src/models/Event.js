import moment from 'moment';

export default class Event {
  static sort(events) {
    return events.sort((a, b) => (
      parseInt(a.startDate.format('YYYYMMDD')) - parseInt(b.startDate.format('YYYYMMDD'))
    ));
  }

  constructor(event) {
    this.event = event;
    console.log(event);
    this.startDate = moment(event.start.date || event.start.dateTime);
    this.endDate = event.end && moment(event.end.date || event.end.dateTime);
    this.id = event.id;
    this.description = event.description;
    this.summary = event.summary;
    this.href = event.htmlLink;
  }
}
