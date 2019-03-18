import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";
import Card from "../Card";

const { GET_FUNDS } = QUERIES;

const FundsCard = ({ funds }) => (
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

export default ({ wallet }) => (
  <Query query={GET_FUNDS} variables={{ wallet }}>
    {({ data: { getFunds: funds }, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <FundsCard funds={funds} />;
    }}
  </Query>
);
