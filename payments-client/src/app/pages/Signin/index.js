import React, { useState } from "react";
import { Mutation } from "react-apollo";

import { MUTATIONS } from "../../apollo";
import { MainContainer, TextInputContainer } from "./styles";
import { Card, Button, TextInput } from "../../components";
import { colors } from "../../utils";

const { SIGNIN_COMPANY } = MUTATIONS;
const { white, blue, dark_blue } = colors;

const Signin = ({ signinCompany }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      const token = await signinCompany({
        variables: { username, password }
      });

      alert(`Token : ${token}`);
    } catch (error) {
      alert(error);
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
          </>
        }
        buttons={
          <Button
            onClick={handleLoginClick}
            text="Log in"
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
    {signinCompany => <Signin signinCompany={signinCompany} />}
  </Mutation>
);
