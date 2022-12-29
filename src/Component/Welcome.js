import React from 'react'

const day_greating = {
    width: "100%",
    height: "100vh",
    background: "#bddeff",
    display: "flex"
}
let center_div = {
    width: "70%",
    margin: "auto",
    height: "150px",
    borderRadius: "15px",
    fontFamily: "'Signika Negative', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "41px",
    fontWeight: "600",
}
const hours = new Date().getHours()
const isDay = hours > 6 && hours < 12;
const isAfternoon = hours > 13 && hours < 17;
const isNight = hours > 17 && hours < 24;
let greating = "";
let new_center_div = {};
if (isDay) {
    greating = "Good Morning"
    new_center_div = {...center_div,background: "#00f5ff"}
} else if (isAfternoon) {
    greating = "Good Afternoon"
    new_center_div = {...center_div,background: "#f9ff00"}
} else if (isNight) {
    greating = "Good Evening"
    new_center_div = {...center_div,background: "#2f3a88"}
} else {
    greating = "Good Night"
}
console.log(new_center_div);
export default function Welcome() {
    return (
        <>
            <div id='bg' style={day_greating}>
                <div style={new_center_div}>Hello sir , {greating}</div>
            </div>
        </>
    )
}
