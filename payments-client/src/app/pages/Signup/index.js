import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { MUTATIONS } from "../../apollo";
import { MainContainer, TextInputContainer } from "./styles";
import { Modal, Button, TextInput } from "../../components";
import { colors } from "../../utils";

const SignUp = ({ createCompany, data }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { blue, dark_blue, white } = colors;

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleRegisterClick = event => {
    event.preventDefault();
    createCompany({ variables: { username, password } });
  };

  return (
    <MainContainer>
      <Modal
        title="Sign up"
        content={
          <>
            <TextInputContainer>
              <TextInput
                name="username"
                value={username}
                handleChange={handleUsernameChange}
              />
            </TextInputContainer>
            <TextInputContainer>
              <TextInput
                name="password"
                value={password}
                handleChange={handlePasswordChange}
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
      {(createCompany, { data }) => {
        console.log(typeof createCompany);

        return <SignUp createCompany={createCompany} data={data} />;
      }}
    </Mutation>
  );
};
