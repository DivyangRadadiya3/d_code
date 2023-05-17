import React from 'react';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SignOut = () => {

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    async function signout(e) {
        try {
            await logOut();
            navigate('/Home');
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>
            <div className="main">
                <h1 className='text-center'># Hello {user?.displayName} </h1>
                <button
                    className="btn btn-dark btn-lg btn-rounded offset-4"
                    onClick={(e) => signout(e)}
                >
                    Log Out
                </button>
            </div>
        </>
    );
};

export default SignOut;