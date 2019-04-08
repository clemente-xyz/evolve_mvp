import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { MUTATIONS } from "../../../apollo";
import {
 Button, Card, Loading, TextInput,
} from "../../../components";
import { constants, colors } from "../../../utils";
import { ErrorText, MainContainer, TextInputContainer } from "./styles";

const { CREATE_COMPANY } = MUTATIONS;
const { SUCCESS_REGISTRATION_MESSAGE } = constants;
const { BLUE, DARK_BLUE, WHITE } = colors;

const SignUp = ({
 createCompanyMutation, loadingState, errorState, history, refetch,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = ({ target: { name: inputName, value: inputValue } }) => {
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
        data: { createCompany },
      } = await createCompanyMutation({
        variables: { username, password, email },
      });

      const { token } = createCompany;

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
        title={{
          text: "Sign up",
          alignment: "center",
        }}
        content={(
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
)}
        buttons={(
          <Button
            onClick={handleRegisterClick}
            text={loadingState ? <Loading color={WHITE} /> : "Register"}
            backgroundColor={BLUE}
            hoverColor={DARK_BLUE}
            textColor={WHITE}
          />
)}
      />
    </MainContainer>
  );
};

SignUp.defaultProps = {
  errorState: null,
};

SignUp.propTypes = {
  createCompanyMutation: PropTypes.func.isRequired,
  loadingState: PropTypes.any.isRequired,
  errorState: PropTypes.any,
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

const SignUpWithApollo = props => (
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

export default withRouter(SignUpWithApollo);
