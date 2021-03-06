import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [userpk, setUserpk] = useState("");
  const [userfirstname, setUserfirstname] = useState("");
  const [userlastname, setUserlastname] = useState("");
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [userdriver, setUserdriver] = useState();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [userStar, setUserStar] = useState();
  const [hesCode, setHesCode] = useState("");

  const [cartype, setCartype] = useState("");
  const [update, setUpdate] = useState("");
  const [balance, setBalance] = useState();

  const [hesCodeValue, sethesCodeValue] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.replace(window.env.FRONTEND_URL + "/login");
    } else {
      fetch(window.env.BACKEND_URL + "/api/v1/users/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUseremail(data.email);
          setUserpk(data.pk);
          setUserfirstname(data.first_name);
          setUsername(data.username);
          setUserlastname(data.last_name);
          setUserdriver(String(data.is_driver));
          setHesCode(data.hes_code);
          setUserStar(data.star);
          setLat(data.latitude);
          setLong(data.longitude);
          setBalance(data.balance);
          sethesCodeValue(data.hes_code_value);
          setCartype(data.car_type);
          setLoading(false);
        });
    }
  }, [update]);

  const handleChangeUserInfo = (event) => {
    fetch(window.env.BACKEND_URL + "/api/v1/users/setting/" + userpk, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        pk: userpk,
        is_driver: userdriver,
        username: username,
        email: useremail,
        first_name: userfirstname,
        last_name: userlastname,
        balance: balance,
        hes_code: hesCode,
        star: userStar,
        hes_code_value: hesCodeValue,
        car_type : cartype
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        window.location.replace(window.env.FRONTEND_URL + "/settings");
      });
  };
  /////////////////
  const handleUserTypeChange = (event) => {
    if (event.target.value === "true") {
      setUserdriver(true);
    } else {
      setUserdriver(false);
    }
  };
  ////////////////
  if (loading === true) {
    return <Loading></Loading>;
  } else if (loading === false) {
    return (
      <div id="settings">
        <div className="settings-form-card">
          <h1>Account Information</h1>
          <form className="settings-form">
            <label>
              ID
              <div>
                <input type="text" name="pk" placeholder={userpk} disabled />
              </div>
            </label>
            <label>
              First Name
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder={userfirstname}
                  value={userfirstname}
                  onChange={(e) => setUserfirstname(e.target.value)}
                />
              </div>
            </label>
            <label>
              Last Name
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder={userlastname}
                  value={userlastname}
                  onChange={(e) => setUserlastname(e.target.value)}
                />
              </div>
            </label>
            <label>
              Email
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={useremail}
                  value={useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                />
              </div>
            </label>
            <label>
              Username
              <div>
                <input
                  type="username"
                  name="username"
                  placeholder={username}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled
                />
              </div>
            </label>
            <label>
              HES Code 
              <div>
                <input
                  type="text"
                  name="hesCodeValue"
                  placeholder={hesCodeValue}
                  value={hesCodeValue}
                  onChange={(e) => sethesCodeValue(e.target.value)}
                  maxLength={12}
                />
              </div>
            </label>
            <label>
              HES Code Status
              <div>
                <input
                  type="text"
                  name="hes_code"
                  placeholder={hesCode}
                  value={hesCode}
                  onChange={(e) => setHesCode(e.target.value)}
                  disabled
                />
              </div>
            </label>
            <label>
              Car Type
              <div>
                <input
                  type="text"
                  name="hes_code"
                  placeholder={cartype}
                  value={cartype}
                  onChange={(e) => setCartype(e.target.value)}
                />
              </div>
            </label>

          <h6 style={{"color":"red"}}>Please fill the car type field for taking request!</h6>
            <label>
              Balance
              <div>
                <input
                  type="text"
                  name="balance"
                  placeholder={balance}
                  value={balance}
                  maxLength={15}
                  onChange={(e) => setBalance(e.target.value)}
                  disabled
                />
              </div>
            </label>
            <label>
              User Type
              <div>
                <select
                  defaultValue={String(userdriver)}
                  onChange={handleUserTypeChange}
                >
                  <option value={true}>Driver</option>
                  <option value={false}>Traveller</option>
                </select>
              </div>
            </label>
            <Button
              variant="warning"
              onClick={(e) => {
                handleChangeUserInfo();
              }}
            >
              Save Account Information
            </Button>
          </form>
          <div>
            <p>or</p>
            <Link className="link_nav" to="/logout">
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
