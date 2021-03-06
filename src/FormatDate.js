import React from "react";

export default function FormatDate (props) {
    let days=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day= days[props.date.getDay()];
    let hours =props.date.getHours();
    if(hours<10){
        hours=`${hours}`;
    }
    let minutes= props.date.getMinutes();
    if(minutes<10) {
        minutes=`0${minutes}`;
    }
    let month =months[props.date.getMonth()];
    let date=props.date.getDate();
    return (
        <div>
    <h2>{day}, {month} {date}
    </h2>
    <h5>{hours}:{minutes}</h5>
        
    </div>
   
    );
}