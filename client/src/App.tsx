import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

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
    <Container maxWidth="xl">
      <Typography variant="h2">Quiz app</Typography>
      <Typography variant="body1">
        {message ? message : "ERROR: Bad server connection"}
      </Typography>
    </Container>
  );
};

export default App;
