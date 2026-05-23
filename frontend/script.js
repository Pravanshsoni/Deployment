import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendData = async () => {
    try {
      const res = await fetch(
        "https://deployment-1-ntig.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      setResponse(JSON.stringify(data));
    } catch (error) {
      setResponse("Error connecting backend");
    }
  };

  return (
    <div className="container">
      <h1>React + FastAPI</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendData}>Send</button>

      <div className="response">
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;