import React, { useState } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { MUTATIONS } from "../../../apollo";
import {
  // eslint-disable-next-line no-trailing-spaces
  Card,
  Button,
  Loading,
  TextInput,
} from "../../../components";
import { colors } from "../../../utils";
import { ErrorText, MainContainer, TextInputContainer } from "./styles";

const { SIGNIN_COMPANY } = MUTATIONS;
const { WHITE, BLUE, DARK_BLUE } = colors;

const SignIn = ({
  signInCompanyMutation,
  loadingState,
  errorState,
  history,
  refetch,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = ({
    target: { name: inputName, value: inputValue },
  }) => {
    if (inputName === "username") {
      setUsername(inputValue);
    } else if (inputName === "password") {
      setPassword(inputValue);
    }
  };

  const handleLoginClick = async () => {
    try {
      const {
        data: { signInCompany },
      } = await signInCompanyMutation({
        variables: { username, password },
      });

      const { token } = signInCompany;

      localStorage.setItem("token", token);

      await refetch();

      setUsername("");
      setPassword("");

      history.push("/wallet");
    } catch (error) {
      setErrorMessage(`${error.graphQLErrors[0].message} 😐`);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <MainContainer>
      <Card
        title={{
          text: "Sign in",
          alignment: "center",
        }}
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
            text={loadingState ? <Loading color={WHITE} /> : "Log in"}
            backgroundColor={BLUE}
            hoverColor={DARK_BLUE}
            textColor={WHITE}
          />
        }
      />
    </MainContainer>
  );
};

SignIn.defaultProps = {
  errorState: null,
};

SignIn.propTypes = {
  signInCompanyMutation: PropTypes.func.isRequired,
  loadingState: PropTypes.any.isRequired,
  errorState: PropTypes.any,
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

const SignInWithApollo = props => (
  <Mutation mutation={SIGNIN_COMPANY}>
    {(signInCompany, { loading, error }) => (
      <SignIn
        signInCompanyMutation={signInCompany}
        loadingState={loading}
        errorState={error}
        {...props}
      />
    )}
  </Mutation>
);

export default withRouter(SignInWithApollo);
