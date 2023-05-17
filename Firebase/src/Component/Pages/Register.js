import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fireDb from "D:/divyang radadiya/desktop/reactcode/Firebase/src/Component/Firebase.js";

const initialState = {
  fname: "",
  email: "",
  contact: "",
  password: "",
};

function Home() {
  const [state, setState] = useState(initialState);
  const { fname, email, contact, password } = state;
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function valid(e) {
    if (e.target.value.length !== 10) {
      alert("Mobile number must be 10 digits!!!");
    }
  }

  function contvalid(e) {
    let ASCIICode = e.which ? e.which : e.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    else return true;
  }

  function checkmail(e) {
    var patton = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const a = e.target.value;
    console.log(a);
    if (a.match(patton)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  }

  function submit() {
    if (!fname || !email || !contact || !password) {
      alert("fill up empty field !");
    } else {
      if (!id) {
        fireDb.child("Registration").push(state, (err) => {
          if (err) {
            alert(err);
          } else {
            alert("Registration Successfully !!!");
            navigate("/SignUp");
            fname = "";
            email = "";
            contact = "";
            password = "";
          }
        });
      } else {
        fireDb.child(`Registration/${id}`).set(state, (err) => {
          if (err) {
            alert(err);
          } else {
            alert("Details Updated Successfully !!!");
            navigate("/TableData");
            fname = "";
            email = "";
            contact = "";
            password = "";
          }
        });
      }
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
      <div className="login">
        <div className="text-center fs-3 title">Registration</div>
        <div className="form">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Full Name
            </label>
            <input
              type="text"
              id="form2Example1"
              name="name"
              value={fname || ""}
              placeholder="Full Name"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Email address
            </label>
            <input
              type="email"
              id="form2Example2"
              name="email"
              value={email || ""}
              placeholder="name@gmail.com"
              className="form-control"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => checkmail(e)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example3">
              Contact
            </label>
            <input
              type="text"
              id="form2Example3"
              name="contact"
              value={contact || ""}
              placeholder="Contact"
              className="form-control"
              // onBlur={(e) => valid(e)}
              maxLength="10"
              onChange={(e) => [handleChange(e), contvalid(e)]}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example4">
              Password
            </label>
            <input
              type="password"
              id="form2Example4"
              name="password"
              value={password || ""}
              placeholder="Password"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            className="btn btn-dark btn-lg btn-rounded offset-4"
            onClick={(e) => submit(e)}
          >
            {id ? "Update" : "Register"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
