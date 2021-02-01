import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components/";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = password === "" || email === "" || name === "";

  const submitForm = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, email)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmail("");
            setPassword("");
            setError("");
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => setError(error.message));;
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={submitForm} method="POST">
            <Form.Input
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
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
              sign up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/login">Sign in.</Form.Link>
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
