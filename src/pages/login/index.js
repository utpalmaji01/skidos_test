import axios from "axios";
import React, { useState } from "react";
// import Loader from "../../components/loader";
import "../../style/loginAnnouncements.scss";
import urls from "../../urls";

const LogIn = (props) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = () => {
    console.log(loginCredentials);
    axios
      .post(urls.login, loginCredentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token",response.data.token);
        props.history.push("/announcements")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-sm container-fluid d-flex align-items-center">
        <div className="row justify-content-center py-4 flex-grow-1">
          <div className="col col-md-6 col-sm-8 col-xs-12">
            <p className="font-weight-bold font-size-20">Log in</p>
            <div className="my-3">
              <label className="form-label font-weight-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                autoComplete="off"
                value={loginCredentials.email}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label font-weight-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                autoComplete="off"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary float-right"
                onClick={() => handleLogIn()}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
