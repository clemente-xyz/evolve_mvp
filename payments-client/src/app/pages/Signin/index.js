import React, { useState } from "react";
import { Mutation } from "react-apollo";

import { MUTATIONS } from "../../apollo";
import { Card, Button, Loading, TextInput } from "../../components";
import { colors } from "../../utils";
import { ErrorText, MainContainer, TextInputContainer } from "./styles";

const { SIGNIN_COMPANY } = MUTATIONS;
const { white, blue, dark_blue } = colors;

const Signin = ({ signinCompanyMutation, loadingState, errorState }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = event => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "username") {
      setUsername(inputValue);
    }

    if (inputName === "password") {
      setPassword(inputValue);
    }
  };

  const handleLoginClick = async () => {
    try {
      const { data } = await signinCompanyMutation({
        variables: { username, password }
      });

      const token = data.signinCompany.token;

      console.log(token);
    } catch (error) {
      setErrorMessage(`${error.graphQLErrors[0].message} 😐`);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <MainContainer>
      <Card
        title="Sign In"
        content={
          <>
            <TextInputContainer>
              <TextInput
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                handleChange={handleInputChange}
              />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                handleChange={handleInputChange}
              />
            </TextInputContainer>
            {errorState && <ErrorText>{errorMessage}</ErrorText>}
          </>
        }
        buttons={
          <Button
            onClick={handleLoginClick}
            text={loadingState ? <Loading color={white} /> : "Log in"}
            backgroundColor={blue}
            hoverColor={dark_blue}
            textColor={white}
          />
        }
      />
    </MainContainer>
  );
};

export default () => (
  <Mutation mutation={SIGNIN_COMPANY}>
    {(signinCompany, { loading, error }) => (
      <Signin
        signinCompanyMutation={signinCompany}
        loadingState={loading}
        errorState={error}
      />
    )}
  </Mutation>
);
