import React from "react";
import { useState } from "react";

export default function Authenticate({ token, setUser }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
  
    async function handleClick() {
        try {
            const result = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const response = await result.json();
            setSuccessMessage(response.message);
            setData(response.data.username);
            setUser(response.data.username);
      } catch (error) {
        setError(error.message);
      }
    }

    return (
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            {data && <h1>Hello, {data}</h1>}
            <button onClick={handleClick}>Authenticate Token</button>
        </>

    )

}