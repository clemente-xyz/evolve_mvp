import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { MUTATIONS } from "../../apollo";
import { MainContainer, TextInputContainer } from "./styles";
import { Card, Button, TextInput } from "../../components";
import { colors } from "../../utils";

const SignUp = ({ createCompany }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { blue, dark_blue, white } = colors;

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
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
                handleChange={handleUsernameChange}
              />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                handleChange={handlePasswordChange}
              />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput
                name="email"
                type="text"
                value={email}
                placeholder="Email"
                handleChange={handleEmailChange}
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

export default () => {
  const { CREATE_COMPANY } = MUTATIONS;

  return (
    <Mutation mutation={CREATE_COMPANY}>
      {createCompany => {
        return <SignUp createCompany={createCompany} />;
      }}
    </Mutation>
  );
};
