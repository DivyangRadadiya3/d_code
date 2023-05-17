import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { incNumber, decNumber, removeItem, quantity } from 'D:/divyang radadiya/desktop/reactcode/farmFrash/src/Action/index.js';
import CartProduct from "./CartProduct";
import Bill from "./Bill";
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const myState = useSelector((state) => state.CartProvider.items);
    const dispatch = useDispatch();
    function Alert() {
        toast.success("Product Removed Successfully.");
    }

    return (
        <>
            <div className="cart">
                <div className="cart-items">
                    {
                        myState.map((item, index) => {
                            return <CartProduct
                                key={index}
                                src={item.imgsrc}
                                title={item.title}
                                price={item.price}
                                qty={item.qty}
                                remove={() => dispatch(removeItem(item), Alert())}
                                increment={() => dispatch(incNumber(item))}
                                decrement={() => dispatch(decNumber(item))}
                                updateQty={(e) => dispatch(quantity(e, item))}
                            />
                        })
                    }
                </div>
                <Bill />
            </div>

        </>
    )
};

export default Cart;