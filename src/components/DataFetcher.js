import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setMessage("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Fetch Status</h2>
      <p>{message}</p>
    </div>
  );
};

export default DataFetcher;
