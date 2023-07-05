import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import axios, * as others from 'axios';


export default function LightsControl() {
    const [lightLevel, setlightLevel] = useState(300);
    const [dayNight, setDayNight] = useState("0");
    const [changedValue, setChangedValue] = useState(false);
    let LigthsUrl = "http://192.168.10.64/demo";
    //let url ;
    let span

    useEffect(() => {
        span = document.getElementById("sliderValue");
        span.innerHTML = lightLevel;
    });

    useEffect(() => {
        axios
            .get(`${LigthsUrl}/?give=true`)
            .then((response) => {
                console.log("response", response);
                setlightLevel(response.data.DLight);
                setDayNight(response.data.TDay);
            })
            .catch((err) => console.log("errr == ", err));
        console.log('i fire once');
    }, [LigthsUrl]);

    function setLightsLevel() {
        if (changedValue) {
            const url = `${LigthsUrl}/?dlight=${lightLevel}&tday=${dayNight}`;
            console.log('url to send = ', url);
            axios
                .get(url)
                .then((response) => {
                    console.log("response", response);
                })
                .catch((err) => console.log("errr == ", err));

            setChangedValue(false);
        }
    }

    const styles = {
        mainDiv: {
            margin: "0 auto",
            width: "80%",
            padding: "10px",
            border: "5px solid brown",
            borderRadius: "20px",
            backgroundColor: "DodgerBlue",
        },
        buttonStyle: {
            width: "150px",
            height: "60px",
            borderRadius: "10px",
            margin: "15px",
            color: "white",
            fontSize: "25px",
            backgroundColor: "red",
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
            WebkitTextStroke: "0.3px brown",
            fontFamily: "Sans-Serif",
        },
        centre: {
            margin: "0 auto",
            textAlign: "center",
        },
    }

    const onChengeLevel = (event) => {
        setlightLevel(event.target.value);
        span.innerHTML = event.target.value;
        setChangedValue(true);
    }
    const onChangeDayNight = (event) => {
        setDayNight(event.target.value);
        console.log("dayNight == ", dayNight);
    }


    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#4d55f1" }}>


            <div style={styles.mainDiv}>
                <div style={styles.centre}>
                    <h1 style={styles.centre}> Lights Control</h1>

                    <input
                        style={styles.centre}
                        type='range'
                        onChange={onChengeLevel}
                        onMouseLeave={setLightsLevel}
                        min={150}
                        max={550}
                        step={1}
                        value={lightLevel}
                        className='custom-slider'>
                    </input>
                    <span style={{ marginLeft: "20px", background: "red", color: "white", fontSize: "30px", borderRadius: "6px", padding: "2px" }} id="sliderValue"></span>

                    <div onChange={onChangeDayNight} style={{ fontSize: "25px", paddingTop: "10px" }}>
                        <input type="radio" value="0" name="dayNight" checked={dayNight === '0'} /> Day
                        <input type="radio" value="1" name="dayNight" checked={dayNight === '1'} /> Night
                    </div>

                    <br />
                    <button style={styles.buttonStyle}> Sleep </button>
                    <br />
                    <button style={styles.buttonStyle}  >Leave Home </button>
                </div>
                <div style={styles.centre}>
                    <h1 style={styles.centre}>Blinds</h1>
                    <button style={styles.buttonStyle}> Open </button>
                    <button style={styles.buttonStyle}  >Close </button>
                </div>
                <div style={styles.centre}>
                    <h1 style={styles.centre}>Lights</h1>
                    <button style={styles.buttonStyle}> Open </button>
                    <button style={styles.buttonStyle}  >Close </button>
                </div>
                <Link to="/">
                    <button style={{ float: "left", height: "40px", background: "LimeGreen", color: "white", borderRadius: "7px", fontSize: "30px", }}>
                        <PiArrowBendUpLeftBold></PiArrowBendUpLeftBold>Back
                    </button>
                </Link>
            </div>
        </div>
    );
}