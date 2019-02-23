import React, { useState } from "react";
import { Mutation } from "react-apollo";

import { MUTATIONS } from "../../apollo";
import { Card, Button, TextInput } from "../../components";
import { colors } from "../../utils";
import { MainContainer, TextInputContainer } from "./styles";

const { CREATE_COMPANY } = MUTATIONS;
const { blue, dark_blue, white } = colors;

const SignUp = ({ createCompany }) => {
  const [username, setUsername] = useState(""),
    [password, setPassword] = useState(""),
    [email, setEmail] = useState("");

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

  const handleRegisterClick = event => {
    event.preventDefault();

    createCompany({ variables: { username, password, email } });

    alert("Congrats! Now you are subscribed to Evolve");

    setUsername("");
    setPassword("");
    setEmail("");
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
          </>
        }
        buttons={
          <Button
            onClick={handleRegisterClick}
            text="Register"
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
  <Mutation mutation={CREATE_COMPANY}>
    {createCompany => {
      return <SignUp createCompany={createCompany} />;
    }}
  </Mutation>
);
