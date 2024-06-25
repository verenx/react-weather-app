import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()]; 
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
   
        if (minutes > 9) { return ( 
        <div>{day} {hours}:{minutes}</div>);
        } else { return (
            <div>{day} {hours}:0{minutes}</div>);
        }
}