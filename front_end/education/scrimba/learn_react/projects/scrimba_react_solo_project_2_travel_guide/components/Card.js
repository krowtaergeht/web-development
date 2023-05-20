import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.image}`}
                className="card--image"
            />

            <div className="card--content">

                <div className="span--items">

                    <img src="../images/location_icon.png" className="location--icon" />

                    <span className="location--name">{props.location} </span>

                    <span className="location--link">

                        <a href={props.googleMapsUrl}>View on Google Maps </a>

                    </span>

                </div>


                <h1 className="card--title">{props.title}</h1>

                <p className="card--dates">{props.startDate} - {props.endDate}</p>

                <p className="card--description">{props.description}</p>

            </div>

        </div>
    )

}