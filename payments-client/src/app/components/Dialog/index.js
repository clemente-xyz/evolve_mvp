import React from "react";
import PropTypes from "prop-types";

import { MainContainer } from "./styles";

const Dialog = ({ children, confirmAction, declineAction }) => (
  <MainContainer>
    <div>{children}</div>
    <div>
      <button type="button" onClick={confirmAction}>
        {" "}
        Ok
      </button>
      <button type="button" onClick={declineAction}>
        {" "}
        Close
      </button>
    </div>
  </MainContainer>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  confirmAction: PropTypes.func.isRequired,
  declineAction: PropTypes.func.isRequired,
};

export default Dialog;
