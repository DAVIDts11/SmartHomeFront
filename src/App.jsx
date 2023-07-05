import "./App.css";
// import HttpCall from "./components/HttpCall";
// import WebSocketCall from "./components/WebSocketCall";
// import { io } from "socket.io-client";
import React ,{ useEffect, useState } from "react";
import Main from "./pages/Main";


// const socket = io.connect("http://localhost:5555")



 export default function App() {
//     useEffect(() => {
//       socket.on("lahut", (data) => {
//         console.log(data);
//       });
//     });
   

//     const sendMessage = () =>{
//         socket.emit("message","HHHOEEEELLLLOOO ::::)))))!!!!")
//         console.log('sent');
//     }

    // <input type="text" placeholder="Message"/>
    // <button onClick={sendMessage}>Send message </button>
    return (
        <div >

            <Main/>
        </div>
    )
}





//   const [socketInstance, setSocketInstance] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [buttonStatus, setButtonStatus] = useState(false);
 
//   const send_test = ()=>{
//     console.log('socket = ',socketInstance);
//     socketInstance.emit("send_message",{message:"!!!!  TTT-EEE-SSS-TTT  !!!!"});
//   }
   
//   const handleClick = () => {
//     if (buttonStatus === false) {
//       setButtonStatus(true);
//     } else {
//       setButtonStatus(false);
//     }
//   };

//   useEffect(() => {
//     if (buttonStatus === true) {
//       const socket = io("http://localhost:5002/",{
//         transports: ["websocket"],
//         cors: {
//           origin: "http://localhost:3000/",
//         },
//       }).connect();;
    

//       setSocketInstance(socket);

//       socket.on("connect", (data) => {
//         console.log(data);
//       });

//       setLoading(false);
//      console.log('socket 01= ',socketInstance);
//       socket.on("disconnect", (data) => {
//         console.log(JSON.stringify(data));
//       });

//       return function cleanup() {
//         socket.disconnect();
//       };
//     }
//   }, [buttonStatus]);

//   return (
//     <div className="App">
//       <h1>React/Flask App + socket.io</h1>
//       <div className="line">
//         <HttpCall />
//       </div>
//       {!buttonStatus ? (
//         <button onClick={handleClick}>turn chat on</button>
//       ) : (
//         <>
//           <button onClick={handleClick}>turn chat off</button>
//          <button onClick={send_test}> send_test</button>
//             <div className="line">
//             {!loading && <WebSocketCall socket={socketInstance} />}
//           </div>
//         </>
//       )}
//     </div>
//   );




