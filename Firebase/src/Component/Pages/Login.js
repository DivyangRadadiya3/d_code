import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import fireDb from "D:/divyang radadiya/desktop/reactcode/Firebase/src/Component/Firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const initialState = {
  name: "",
  email: "",
  contact: "",
  password: "",
};

function Login() {
  const { user, googleSignIn } = UserAuth();
  const [state, setState] = useState(initialState);
  const { email, password } = state;
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  var emailpatton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var spcl = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function checkmail() {
    var patton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(patton)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  }

  function submit() {
    if (!email || !password) {
      alert("fill up empty field !");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Log In Successfully...");
          navigate("/Home");
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
      // if (!id) {
      //   fireDb.child("Registration").push(state, (err) => {
      //     if (err) {
      //       alert(err);
      //     } else {
      //       alert("Log in Successfully !!!");
      //       email = "";
      //       password = "";
      //     }
      //   });
      // } else {
      //   fireDb.child(`Registration/${id}`).set(state, (err) => {
      //     if (err) {
      //       alert(err);
      //     } else {
      //       alert("Details Updated Successfully !!!");
      //       email = "";
      //       password = "";
      //     }
      //   });
      // }
    }
  }

  async function registerWithGoogle() {
    try {
      await googleSignIn();
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fireDb.child("Registration").on("value", (info) => {
      if (info.val() !== null) {
        setData({ ...info.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  return (
    <>
      <div className="card justify-content-center" id="signIn">
        <h3 className="text-uppercase text-center mb-3 title">Log In</h3>
        <form className="form">
          <div className="form-outline mb-3">
            <input
              type="email"
              id="form3Example3cg"
              name="email"
              value={email || ""}
              className="form-control form-control-md"
              placeholder="name@gmail.com"
              onChange={(e) => handleChange(e)}
              onBlur={() => checkmail()}
            />
          </div>

          <div className="form-outline mb-3">
            <input
              type="password"
              id="form3Example4cg"
              name="password"
              value={password || ""}
              className="form-control form-control-md"
              placeholder="password"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-info btn-block btn-sm fs-5 gradient-custom-4 text"
              onClick={(e) => submit(e)}
            >
              Log in
            </button>
          </div>

          <p className="text-center text-muted mt-3 mb-3">Or</p>
          <button
            className="btn btn-outline-info offset-3 btn-block btn-sm fs-5 text"
            onClick={(e) => registerWithGoogle(e)}
          >
            <i className="fab fa-google me-2"></i>
            Log in With Google
          </button>

          <p className="text-center text-muted mt-4 mb-0">
            Don't Have an account?{" "}
            <Link to="/Signin">
              <u className="fw-bold text-white">Register here</u>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
