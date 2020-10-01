import React, { useState, useEffect } from 'react';
import Page from './Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro';
import moment from 'moment';
import EventModel from '../models/Event';
import travel from '../images/travel.jpg';
const apiKey = 'AIzaSyA7Ly988BINc6QPAOn-AoP0JhOSG-X9_QU';
let cachedEvents = null;

const DayOfWeek = styled.span`
  position: absolute;
  left: 0;
  color: white;
  font-size: 0.5em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  top: 0.125rem;
  font-weight: bold;
  width: 2.25em;
  text-align: center;
  line-height: 3.25em;
  text-transform: uppercase;
`;

function Date({ startDate, className, href }) {
  const dayOfWeek = startDate.format('dd');
  const formattedDate = startDate.format('Do MMMM YYYY');

  return (
    <a target="_blank" className={className} href={href} rel="noopener noreferrer">
      <FontAwesomeIcon icon={faCalendar}/>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
      {formattedDate}
    </a>
  )
}

const StyledDate = styled(Date)`
  font-size: 0.9em;
  display: block;

  svg {
    position: absolute;
    margin-right: .25em;
    font-size: 1.25em;
    left: 0;
    top: 0.125rem;
  }
`;

const Description = styled.p`
  color: rgba(0,0,0,0.66);
  font-size: 0.9em;
  max-width: min(75vw, 30rem);
`;

const Summary = styled.h3`
  margin: 0;
`;

function Event({ className, href, summary, startDate, description }) {
  return (
    <div className={className}>
      <StyledDate startDate={startDate} href={href}/>
      <Summary>{summary}</Summary>
      <Description>{description}</Description>
    </div>
  );
}

const StyledEvent = styled(Event)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;

  ${Description} {
    margin-top: 0;
  }
`;

function EventList({ events, className }) {
  return (
    <div className={className}>
      { events.map((event) => <StyledEvent key={event.id} {...event}/>) }
    </div>
  );
}

function Events(props) {
  const [events, setEvents] = useState();

  useEffect(() => {
    async function fetchEvents() {
      if(cachedEvents) {
        setEvents(cachedEvents);
      } else {
        return await fetch(`https://www.googleapis.com/calendar/v3/calendars/elesmredckkcqe23gal6bis0kc@group.calendar.google.com/events?timeMin=${moment().format('YYYY-MM-DD')}T00:00:00Z&sortBy=starttime&key=` + apiKey)
          .then(response => response.json())
          .then(data => data.items.map(event => new EventModel(event)))
          .then(data => EventModel.sort(data))
          .then(data => { cachedEvents = data; setEvents(data); });
      }
    }
    fetchEvents();
  }, []);

  return (
    <Page {...props}>
      <h1>The Spirit is moving.</h1>
      <p>God-willing, we move with Him. Here is what's coming up.</p>

      { events ? <EventList events={events}/> : 'Loading from Google...' }
    </Page>
  )
}

export default styled(Events)`
  background-image: url(${travel});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: min(60vw, 75vh);
  background-attachment: fixed;
  padding-bottom: 24rem;
`;
