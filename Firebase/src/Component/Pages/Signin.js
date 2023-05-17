import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import fireDb from "D:/divyang radadiya/desktop/reactcode/Firebase/src/Component/Firebase.js";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  contact: "",
  password: "",
};

const Signin = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, email, contact, password } = state;
  const { id } = useParams();
  const [data, setData] = useState({});
  var emailpatton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var contpatton = /^[0-9\b]+$/;
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var spcl = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function submit() {
    if (!name || !contact || !email || !password) {
      alert("fill up empty field !");
    } else {
      if (!email.match(emailpatton)) {
        alert("Invalid email address!");
      } else {
        if (!contact.match(contpatton)) {
          alert("Enter Only digits!");
        } else {
          if (contact.length !== 10 || contact.length > 10) {
            alert("Mobile number must be 10 digits!!!");
          } else {
            if (!password.match(spcl)) {
              alert("Must Include Symbol in Password!");
            } else {
              if (!password.match(numbers)) {
                alert("Must Include digit in Password!");
              } else {
                if (!password.match(upperCaseLetters)) {
                  alert("Must Include upperCase Letters in Password!");
                } else {
                  if (!password.match(lowerCaseLetters)) {
                    alert("Must Include lowerCase Letters in Password!");
                  } else {
                    await createUserWithEmailAndPassword(auth, email, password,state)
                      .then(() => {
                        alert("Account Created Successfully...");
                        navigate("/Home");
                      })
                      .catch((error) => {
                        const errorMessage = error.message;
                        alert(errorMessage);
                      });
                    // fireDb.child("Registration").push(state, (err) => {
                    //   if (err) {
                    //     alert(err);
                    //   } else {
                    //     alert("Registration Successfully !!!");
                    //     navigate("/SignUp");
                    //     name = "";
                    //     email = "";
                    //     contact = "";
                    //     password = "";
                    //   }
                    // });
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

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
        <h3 className="text-uppercase text-center title">Create an account</h3>

        <form className="form">
          <div className="form-outline mb-3">
            <input
              type="text"
              id="form3Example1cg"
              name="name"
              value={name || ""}
              className="form-control form-control-md"
              placeholder="Your name"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="form-outline mb-3">
            <input
              type="email"
              id="form3Example3cg"
              name="email"
              value={email || ""}
              className="form-control form-control-md"
              placeholder="name@gmail.com"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-outline mb-3">
            <input
              type="number"
              id="form3Example4cdg"
              name="contact"
              value={contact || ""}
              className="form-control form-control-md"
              placeholder="Contact"
              maxLength="10"
              onChange={(e) => handleChange(e)}
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
            <p className="text-start text-muted  mb-0">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-info btn-block btn-sm fs-5 gradient-custom-4 text"
              onClick={(e) => submit(e)}
            >
              Register
            </button>
          </div>

          <p className="text-center text-muted mt-5 mb-0">
            Have already an account?{" "}
            <Link to="/Login">
              <u className="fw-bold text-white">Login here</u>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
