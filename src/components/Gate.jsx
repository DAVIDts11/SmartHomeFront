import React from 'react'
import axios, * as others from 'axios';


export default function Gate() {
    const gateParkingUrl = 'http://192.168.10.10';

    const styles = {
        mainDiv: {
            height: "80%",
            textAlign: "center",
        },
        buttonStyle: {
            borderRadius: "8px",
            width: "48%",
            height: "100%",
            // color: "Gray",
            margin:"2px 1px",
            fontSize: "18px",
            fontWeight: "bold",
            color:"white",
            // border: "5px solid grey",
        }
    }
    function openTheGate() {
        axios
            .get(gateParkingUrl + "/26/on")
            .then((response) => {
                console.log("response",response);
            })
            .catch((err) => console.log(err));

    }

    function closeTheGate() {
        axios
        .get(gateParkingUrl + "/26/off")
        .then((response) => {
            console.log("response",response);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div style={{ height: "80%" }}>
            Gate
            <div style={styles.mainDiv}>
                <button style={{...styles.buttonStyle,background:"Green"}} onClick={openTheGate}> On </button>
                <button style={{...styles.buttonStyle,background:"Black"}}>Off </button>
            </div>
        </div>
    )
}

//&nbsp;&#9650;
//&nbsp;&#9660;
