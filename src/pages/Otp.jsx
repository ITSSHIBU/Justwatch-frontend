
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import BackgroundImage from "../components/BackgroundImage";
  import axios from "axios";
  import Header from "../components/Header";
  function Otp() {
    
    const [showMobile, setShowMobile] = useState(false);
    const [formValues, setFormValues] = useState({
      email: "",
      password: "",
    });
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        const { mobile } = formValues;
        console.log("mobile:",mobile)
        let userIsExist = await axios.post("http://localhost:5000/api/user/otp", {
          mobile
        });
        if (userIsExist.data.result === "failed"){
          alert(userIsExist.data.msg)
        }else{

        navigate("/signup")
        }
        //await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error)  {
        console.log(error);
      }
    };
  
    // onAuthStateChanged(firebaseAuth, (currentUser) => {
    //   if (currentUser) navigate("/");
    // });
  
    return (
      <Container >
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h6>
                Ready to watch? Enter your email to create or restart membership.
              </h6>
            </div>
            <div className="form">
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
              
            </div>
            {<button onClick={handleSignIn}>Generate OTP</button>}
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
  
  export default Otp;
  