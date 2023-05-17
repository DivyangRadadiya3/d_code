import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button/index';
import HomeIcon from '@mui/icons-material/Home';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import { ToastContainer } from 'react-toastify';

const NavBar = () => {
    const myState = useSelector((state) => state.CartProvider.items);
    const arrLength = myState.filter((elem, index) => myState.indexOf(elem) === index);

    return (
        <>
            <div className="header">
                <span className="logo">FreshFarm</span>
                <div className="header-right">
                    <Link to="/">
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            startIcon={<HomeIcon />}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="/cart" className='cart'>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            startIcon={<CartIcon />}
                        >
                            Cart
                        </Button>
                        <span className="cartLength"> {arrLength.length} </span>
                    </Link>

                </div>
            </div>
            <ToastContainer
                draggable={false} autoClose={1000}
                position={"bottom-center"} hideProgressBar={false}
                newestOnTop={true} closeOnClick={false}
                theme="dark"
            />
            {/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </>
    );
};

export default NavBar;