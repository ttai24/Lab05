import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state: event } = location;

    return (
        <div className="container mt-5">
            <h1>{event.title}</h1>
            <img src={event.image} alt={event.title} style={{ width: "100%", height: "auto" }} />
            <p className="mt-3">{event.date}</p>
            <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
            <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">Back</button>
        </div>
    );
};

export default EventDetail;
