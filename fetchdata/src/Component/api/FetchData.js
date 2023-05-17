import React, { useState, useEffect } from "react";
import axios from "./axios";
import PokemonCard from './PokemonCard';

function FetchData() {
    const [pokemon, setPokemon] = useState([]);
    const [item, setItem] = useState(0);

    async function getData() {
        try {
            const res = await axios.get(`/pokemon?limit=8&offset=${item}`);
            console.log(res);
            setTimeout(() => {
                setPokemon([...pokemon, ...res.data.results]);
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [item]);

    function handle() {
        if (window.innerHeight + document.documentElement.scrollTop + 1
            >= document.documentElement.scrollHeight) {
            setItem((prev) => prev + 8);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handle);
    }, []);

    return (
        <>
            {pokemon &&
                (pokemon).map((current, index) => {
                    return <PokemonCard
                        key={index}
                        name={current.name}
                    />
                })

            }
        </>
    );
};

export default FetchData;