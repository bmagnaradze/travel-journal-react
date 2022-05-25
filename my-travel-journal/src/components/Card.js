import React from "react"

export default function Card(props) {

    return (
        <div className="card">
            <img 
                src={props.imageUrl}
                className="card--image" 
                alt=""/
            >
            <div className="card--info">
                <div className="card--place">
                        <img
                            src="./location-icon.png" className="card--loc-icon" alt=""
                        />
                        <h3 className="card--location">{props.location}</h3>
                        <a href={props.googleMapsUrl} 
                           target="_blank" 
                           className="card--gmap" rel="noreferrer">View on Google Maps
                        </a>
                </div>
                
                <h1 className="card--title">{props.title}</h1>
                <span className="card--date">{props.startDate}-{props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
            
        </div>
    )
}