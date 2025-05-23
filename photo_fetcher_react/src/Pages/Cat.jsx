import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../css/app.css';
import { CatFacts } from "../Services/CatFacts.js";

export default function Cat() {
    const [fact, setFact] = useState();
    const navigate = useNavigate();

    const generateFact = async () => {
        try {
            const fact = await CatFacts.getFact();
            setFact(fact);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button onClick={() => navigate('/')} className='btn'> Photo Fetcher </button>
            <h1>Fun Cats Facts</h1>
            {fact ? (
                <p>{fact}</p>
            ) : (<p>No fact.</p>)}
            <button onClick={generateFact} className='btn stretch'> Generate single fact </button>
        </>
    );
}