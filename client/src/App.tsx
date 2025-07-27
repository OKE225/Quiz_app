import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Quiz app</h2>
      <p>{message ? message : "ERROR: Bad server connection"}</p>
    </div>
  );
};

export default App;
