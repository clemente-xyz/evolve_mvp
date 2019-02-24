import React from "react";

export default ({ myData }) => {
  if (myData) {
    const {
      meAsCompany: { username, email }
    } = myData;

    return (
      <div>
        Hello {username}! Your email is : {email}
      </div>
    );
  }

  return <div>Evolve Home</div>;
};
