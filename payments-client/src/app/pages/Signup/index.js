import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { MUTATIONS } from "../../apollo";
import { Button, Card, Loading, TextInput } from "../../components";
import { constants, colors } from "../../utils";
import { ErrorText, MainContainer, TextInputContainer } from "./styles";

const { CREATE_COMPANY } = MUTATIONS;
const { SUCCESS_REGISTRATION_MESSAGE } = constants;
const { blue, dark_blue, white } = colors;

const SignUp = ({
  createCompanyMutation,
  loadingState,
  errorState,
  history,
  refetch
}) => {
  const [username, setUsername] = useState(""),
    [password, setPassword] = useState(""),
    [email, setEmail] = useState(""),
    [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = ({ target }) => {
    const inputName = target.name,
      inputValue = target.value;

    if (inputName === "username") {
      setUsername(inputValue);
    } else if (inputName === "password") {
      setPassword(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    }
  };

  const handleRegisterClick = async () => {
    try {
      const {
        data: { createCompany }
      } = await createCompanyMutation({
        variables: { username, password, email }
      });

      const token = createCompany.token;

      alert(SUCCESS_REGISTRATION_MESSAGE(username));

      localStorage.setItem("token", token);

      await refetch();

      setUsername("");
      setPassword("");
      setEmail("");

      history.push("/");
    } catch (error) {
      setErrorMessage(`${error.graphQLErrors[0].message} 😐`);

      setUsername("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <MainContainer>
      <Card
        title="Sign up"
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
            <TextInputContainer>
              <TextInput
                name="email"
                type="text"
                value={email}
                placeholder="Email"
                handleChange={handleInputChange}
              />
            </TextInputContainer>

            {errorState ? <ErrorText>{errorMessage}</ErrorText> : null}
          </>
        }
        buttons={
          <Button
            onClick={handleRegisterClick}
            text={loadingState ? <Loading color={white} /> : "Register"}
            backgroundColor={blue}
            hoverColor={dark_blue}
            textColor={white}
          />
        }
      />
    </MainContainer>
  );
};

const SignupWithMutation = props => (
  <Mutation mutation={CREATE_COMPANY}>
    {(createCompany, { loading, error }) => (
      <SignUp
        createCompanyMutation={createCompany}
        loadingState={loading}
        errorState={error}
        {...props}
      />
    )}
  </Mutation>
);

export default withRouter(SignupWithMutation);
