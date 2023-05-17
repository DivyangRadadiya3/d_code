import React,{useState} from "react";
import { BsPersonCircle, BsList } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  async function signout(e) {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="p-5 bg-slate-950 shadow md:flex md:text-center md:justify-between flex item-center justify-between md:item-center static md:static">
        <div className=" justify-between">
          <span className="text-3xl flex text-cyan-400">
            <FaDatabase className="text-white mx-2 mt-1 md" />
            Firebase
          </span>
        </div>
        <svg
          viewBox="0 0 24 24"
          className="h-8 mt-2 text-xl space-x-4 cursor-pointer block md:hidden text-white"
          onClick={() => setToggle(!toggle)}
        >
          <BsList />
        </svg>
        <ul
          className={` md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full md:w-auto left-0 
          md:py-0 py-2 md:pl-0 pl-7 text-xl md:text-2xl text-white md:text-white bg-slate-800 md:bg-inherit ${
            toggle ? "block mt-12 md:mt-0" : "hidden"
          }`}
        >
          <li className="mx-4 my-5 md:my-0 w-auto hover:border-b-2 hover:border-yellow-300">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 my-5 md:my-0  hover:border-b-2 hover:border-yellow-300">
            <Link to="/Login">
              <button>Log In</button>
            </Link>
          </li>
          <li className="mx-4 my-5 md:my-0">
            <Link to="/profile">
              <svg viewBox="0 0 24 24" className="h-8 mt-2">
                <BsPersonCircle />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

// {user ? (
//   <button
//     className="nav_link btn btn-outline-info text-black  fs-5"
//     id="timing-tab"
//     aria-selected="false"
//     onClick={() => signout()}
//   >
//     Log Out
//   </button>
// ) : null}