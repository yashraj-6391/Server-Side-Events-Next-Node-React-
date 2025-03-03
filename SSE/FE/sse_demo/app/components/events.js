'use client'
import React, { useEffect, useState } from 'react';

const EventStream = () => {
  const [events, setEvents] = useState([]);
  console.log('events:', events);

  useEffect(() => {
    // Establish an SSE connection
    const eventSource = new EventSource('http://localhost:5000/events');

    // Listen for messages
    eventSource.onmessage = (event) => {
    console.log('event:', event);
      const newEvent = JSON.parse(event.data);
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    // Handle errors
    eventSource.onerror = () => {
      console.error('EventSource failed.');
      eventSource.close();
    };

    // Cleanup on component unmount
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Server-Sent Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.timestamp}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventStream;
