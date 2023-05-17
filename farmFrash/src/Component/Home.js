import React, { useState, useEffect } from "react";
import { data } from "./ItemDetails";
import 'react-toastify/dist/ReactToastify.css';
import FetchData from "./FetchData";

function HomePage() {

    const [loading, setLoading] = useState(true);
    function handle() {
        data != null ? setLoading(false) : setLoading(true)
    }

    useEffect(() => {
        handle();
    }, []);

    return (
        <>
            {
                loading ?
                    <p className="loader">Loading...</p>
                    :
                    <FetchData />
            }
        </>
    )
};

export default HomePage;