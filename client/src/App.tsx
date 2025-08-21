import { useEffect, useState } from "react";

const App = () => {
  const [fetchMessage, setFetchMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        setFetchMessage(data.message);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className="bg-yellow-500 text-3xl font-bold p-4">Connecting...</h1>
      ) : (
        <h1 className="bg-green-500 text-3xl font-bold p-4">{fetchMessage}</h1>
      )}
    </>
  );
};

export default App;
