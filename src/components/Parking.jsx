import React from 'react'
import axios, * as others from 'axios';

export default function Parking() {
    const gateParkingUrl = 'http://192.168.10.10';

    const styles = {
        mainDiv: {
            height: "80%",
            textAlign: "center",
        },
        buttonStyle: {
            borderRadius: "8px",
            width: "48%",
            margin:"2px 1px",
            height: "100%",
            color: "Gray",
            fontSize: "18px",
            fontWeight: "bold",
            padding:"0px",
        }
    }

    function parkingUp() {
        const url = gateParkingUrl + "/27/on"
        console.log(url);
        axios
        .get(url)
        .then((response) => {
            console.log("response",response);
        })
        .catch((err) => console.log(err));
    }

    function parkingDown() {
        const url = gateParkingUrl + "/27/off"
        console.log(url);
        axios
        .get(url)
        .then((response) => {
            console.log("response",response);
        })
        .catch((err) => console.log(err));
    }    
    // function parkingStop() {
    //     fetch(parkingUrl + "?diraction=open")
    //         .then(res => res.json())
    //         .then(data => console.log("Open gate response  :", data))
    // }



    return (
     <div style={{ height: "80%" }}>
            Parking
            <div style={styles.mainDiv}>
                <button style={styles.buttonStyle} onClick={parkingUp}> Up &nbsp;&#9650;</button>
                <button style={styles.buttonStyle} onClick={parkingDown}>Down &#9660;</button>
            
            </div>
        </div>
    )
}
// &nbsp;
//  <button style={styles.buttonStyle} onClick={parkingStop}>Stop &nbsp;&#x2B1B;</button>

//textOrientation: "upright",writingMode: "vertical-rl",


// <div style={{marginLeft:"0px",paddingLeft:"0px",height: "100%",  display: "flex",flexWrap: "wrap", flexDirection: "column",alignItems: "center",justifyContent: "center",}}>
// <p style={{ marginLeft:"0px",paddingLeft:"0px",letterSpacing: "0px",}}> Parking</p>
