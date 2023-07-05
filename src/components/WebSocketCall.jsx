import  React, { useEffect, useState } from "react";


export default function WebSocketCall({ socket }) {
    const sendMessage = (message) => {
        // Emit the 'message' event to the server
        // console.log('send',socket);
        // socket.send("llllllllllll");
        socket.emit("send_message", message);
    
      };
    
      return (
        <div>
          {/* Your component JSX */}
          <button onClick={() => sendMessage('Hello, server!')}>
            Send Message
          </button>
        </div>
      );
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleText = (e) => {
//     const inputMessage = e.target.value;
//     setMessage(inputMessage);
//   };

//   const handleSubmit = () => {
//     if (!message) {
//       return;
//     }
//     socket.emit("data", message);
//     socket.emit('message', message);

//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("data", (data) => {
//       setMessages([...messages, data.data]);
//     });
//   }, [socket, messages]);

//   return (
//     <div>
//       <h2>WebSocket Communication</h2>
//       <input type="text" value={message} onChange={handleText} />
//       <button onClick={handleSubmit}>submit</button>
//       <ul>
//         {messages.map((message, ind) => {
//           return <li key={ind}>{message}</li>;
//         })}
//       </ul>
//     </div>
//   );
}