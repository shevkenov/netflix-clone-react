import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components/";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";


export default function Signin() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const isInvalid = (password === "") | (email === "");

  const submitForm = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      setEmail("");
      setPassword("");
      setError("");
      history.push(ROUTES.BROWSE);
    }).catch(({message}) => {
      console.log(error);
      setError(message);
    });
    
    
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={submitForm} method="POST">
            <Form.Input
              value={email}
              placeholder="Email or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              sign in
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
