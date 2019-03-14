import React from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";
import Card from "../Card";

const { GET_MARKETS } = QUERIES;

const MarketsCard = ({ markets }) => (
  <Card
    title="Markets"
    content={
      <>
        {markets.map(({ _id, name }) => (
          <p key={_id}>{name}</p>
        ))}
      </>
    }
    buttons={null}
  />
);

export default () => (
  <Query query={GET_MARKETS}>
    {({ data: { getMarkets: markets }, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <MarketsCard markets={markets} />;
    }}
  </Query>
);
