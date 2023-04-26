import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
    const [eventID, setEventID] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [description, setDescription] = useState('');
  
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Event ID: ${eventID} Title: ${title} Type: ${type} Start Time: ${startTime} End Time: ${endTime} Subject: ${subject} Category: ${category} Location: ${location} Capacity: ${capacity} Description: ${description}`);
      navigate('/events');
      // Perform form submission logic here
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Event ID:
                <input type="text" value={eventID} onChange={(e) => setEventID(e.target.value)} />
            </label>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Type:
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </label>
            <label>
                Start Time:
                <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </label>
            <label>
                End Time:
                <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </label>
            <label>
                Subject:
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </label>
            <label>
                Category:
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                Capacity:
                <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Create Event</button>
        </form>
    )
} export default CreateEvent;