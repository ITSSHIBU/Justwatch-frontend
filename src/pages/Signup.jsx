
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import axios from "axios";
import Header from "../components/Header";

function Signup() {
  
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    otp: "",
    mobile: ""
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password, mobile, otp } = formValues;
      console.log("email:",email, "password:",password, "mobile:",mobile, "otp:",otp)
      const existUser = await axios.post("http://localhost:5000/api/user/signup", {
        email,password,mobile,otp
      });
      console.log("existUser:",existUser)
      
      alert(existUser.data.msg)
      
      navigate("/login")
      //await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error)  {
      console.log(error);
    }
  };

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate("/");
  // });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            <input
              type="mobile"
              placeholder="Mobile"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="mobile"
              value={formValues.mobile}
            />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />

              <input
                type="otp"
                placeholder="Otp"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="otp"
                value={formValues.otp}
              />
            
          </div>
          {<button onClick={handleSignIn}>Sing up</button>}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 20%;
        input {
          color: black;
          border: none;
          padding: 0.5rem;
          font-size: 1rem;
          border: 5px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Signup;
