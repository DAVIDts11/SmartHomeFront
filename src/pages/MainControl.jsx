import React ,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gate from "../components/Gate";
import Parking from "../components/Parking";

export default function MainControl() {
   const myStyle = {
        mainDiv:{
            height: "100vh",
            display: "flex",
            flexWrap: "wrap",
            color: "green",
            backgroundColor: "DodgerBlue",
            padding: "50px",
            fontFamily: "Sans-Serif",
            justifyContent: "space-between",
            overflowY:"scroll",
        },
        button:{
            height:"150px",
            width:"200px",
            margin:"30px",
            borderRadius:"20px",
            padding: "10px",
            color:"white",
            fontSize:"25px",
            fontWeight: "bold",
            border: "5px solid brown",
            backgroundColor:"red",
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
            WebkitTextStroke: "0.3px brown",
        },
        parking:{
            height:"200px",
            padding:"9px",
        }

      };


    return(
        <div style={myStyle.mainDiv} className="main_page">
            <button style={{...myStyle.button,display:"inlineBlock"}}> <Gate></Gate> </button>
            <Link to="/lights_control">
                <button style={myStyle.button}> Lighting Control</button>
            </Link>
            
            
            <button style={myStyle.button}> CCTV </button>
            <Link to="/irrigation">
               <button style={myStyle.button}> Irrigation</button>
            </Link>         
            <button style={{...myStyle.button}}><Parking></Parking> </button>
            <button style={myStyle.button}> Energy Managment </button>

        </div>

    )

 
}