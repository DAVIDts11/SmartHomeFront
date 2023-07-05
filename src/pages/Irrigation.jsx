import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { PiArrowBendUpLeftBold } from "react-icons/pi";

export default function Irrigation() {
    const [moisture, setMoisture] = useState("Dry");
    const [watterUsed, setWatterUsed] = useState(0);

    const url = "192.168.10.44";

    function getData() {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMoisture(data.moister);
                setWatterUsed(data.watterUsed);
            });
    }


    useEffect(() => {
        getData();
    })

    return (
        <div>
            <div><h1>Moisture: {moisture}</h1>  </div>
            <div> <h1>Tottal Watter Used: {watterUsed}</h1> </div>
           <dir>
             <button onClick={getData}>Refresh </button> </dir>
           
            <Link to="/">
                <button style={{ float: "left",fontSize:"30px", height: "40px", borderRadius: "7px", }}>
                 <PiArrowBendUpLeftBold></PiArrowBendUpLeftBold>Back
                </button>
            </Link>
        </div>
    )
}
