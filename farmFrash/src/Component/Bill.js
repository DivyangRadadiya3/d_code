import { useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";

export default function Bill() {
    const myState = useSelector((state) => state.CartProvider.items);
    const arrLength = myState.filter((elem, index) => myState.indexOf(elem) === index);
    const [total, setTotal] = useState(0);
    let totalBill = 0;
    myState.map((item) => { totalBill += item.price * item.qty });
    let FinalAmt = (totalBill * 10 / 100) + totalBill;
    useEffect(() => {
        setTotal(FinalAmt);
    }, [myState]);

    return (
        <>
            <div className="summary-total">
                <div className="total-title">Bill Details</div>
                <div className="details">
                    <p className="total-value final-value">Price ({arrLength.length} item) <span>₹{totalBill}</span></p>
                    <p className="total-value final-value">CGST <span>5%</span></p>
                    <p className="total-value final-value">SGST <span>5%</span></p>
                    <p className="total-value final-value">Delivery Charges <span>FREE</span></p>
                </div>
                <div className="TotalAmt">
                    <p className="finalAmt">Total Amount <span>₹{total}</span></p>
                </div>
            </div>
        </>
    )
}