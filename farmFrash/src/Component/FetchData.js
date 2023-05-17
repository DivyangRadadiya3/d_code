import HomeProduct from "./HomeProduct";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { data } from "./ItemDetails";
import { addItem } from 'D:/divyang radadiya/desktop/reactcode/farmFrash/src/Action/index.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Food.css';

function FetchData() {
    const dispatch = useDispatch();
    const Alert = () => {
        toast.success("Product Added Successfully.");
    };
    // const LimitAlert = () => {
    //     toast.success("Product Quantity Max 5!");
    // };
    const [item, setItem] = useState(8);

    function getData() {
        try {
            setTimeout(() => {
                setItem((prev) => prev + 8);
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    function handle() {
        if (window.innerHeight + document.documentElement.scrollTop + 1
            >= document.documentElement.scrollHeight) {
            getData();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handle);
    }, []);

    return (
        <>
            <div className={"product-container"}>
                {
                    data.map((preData, index) => {
                        if (index < item) {
                            return <HomeProduct
                                key={index}
                                imgs={preData.imgsrc}
                                title={preData.title}
                                price={preData.price}
                                onClick={() => dispatch(addItem(preData),Alert())}
                            />
                        }
                    })

                }
            </div>
        </>
    );
};

export default FetchData;