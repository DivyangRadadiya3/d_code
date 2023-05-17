import React from "react";
import fireDb from "D:/divyang radadiya/desktop/reactcode/Firebase/src/Component/Firebase.js";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { auth } from "../Firebase";

const TableData = () => {
  const [data, setData] = useState({});
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const da = auth.currentUser;
  console.log(da);

  async function signout(e) {
    try {
      await logOut();
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  }

  const delet = (id) => {
    if (window.confirm("Are you sure?")) {
      fireDb.child(`Registration/${id}`).remove((err) => {
        if (err) {
          alert(err);
        } else {
          alert("Data Deleted Successfully...");
        }
      });
    }
  };
  useEffect(() => {
    fireDb.child("Registration").on("value", (data) => {
      if (data.val() !== null) {
        setData({ ...data.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

  return (
    <>
      <div className="main">
        <h1 className="text-center"># Hello {user?.displayName} </h1>
        <h1 className="head">
          <span>Details</span>
        </h1>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th className="text-white text-center">No</th>
              <th className="text-white text-center">Name</th>
              <th className="text-white text-center">Email</th>
              <th className="text-white text-center">Contact</th>
              <th className="text-white text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data !== null
              ? Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{data[id].name}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].contact}</td>
                      <td>
                        <div
                          className="btn"
                          aria-label="Basic mixed styles example"
                        >
                          <Link to={`/Update/${id}`}>
                            <button
                              type="button"
                              className="btn btn-primary text-white btn-md me-3"
                            >
                              Edit
                            </button>
                          </Link>
                          <Link to={`/InfoView/${id}`}>
                            <button
                              type="button"
                              className="btn btn-success text-white btn-md me-3"
                            >
                              View
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger btn-md text-white"
                            onClick={() => delet(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        
      </div>
    </>
  );
};

export default TableData;
