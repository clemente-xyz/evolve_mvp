import React from "react";

import Card from "../Card";

export default ({ funds }) => (
  <Card
    title={{
      text: "Funds",
      alignment: "left"
    }}
    content={funds.map(({ _id, currency, amount }) => (
      <p key={_id}>
        {amount} in {currency}
      </p>
    ))}
  />
);
