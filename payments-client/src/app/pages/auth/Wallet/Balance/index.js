import React from "react";
import { Card } from "../../../../components";

export default ({ myWallet }) => {
  return (
    <Card title="Balance" content={<p>{myWallet} CLP</p>} buttons={null} />
  );
};
