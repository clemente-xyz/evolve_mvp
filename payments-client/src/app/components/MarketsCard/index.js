import React, { useState } from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";
import { filterMarketsByPrimaryCur } from "./helpers";
import Card from "../Card";
import { icons } from "../../utils";

const { GET_MARKETS } = QUERIES;

const { Dai } = icons;

const MarketsCard = ({ markets }) => {
  const [activeMarket, setActiveMarket] = useState("CLP");
  const filteredMarkets = filterMarketsByPrimaryCur(activeMarket, markets);

  return (
    <Card
      title="Markets"
      content={
        <>
          <p>
            Chilean market (CLP) <Dai />
          </p>
          {filteredMarkets.map(({ _id, name, primaryCurBuyPrice }) => {
            const [primaryCurName, secondaryCurName] = name.split("/");

            return (
              <p key={_id}>
                {primaryCurName} at {primaryCurBuyPrice} {secondaryCurName}
              </p>
            );
          })}
        </>
      }
      buttons={null}
    />
  );
};

export default () => (
  <Query query={GET_MARKETS}>
    {({ data: { getMarkets: markets }, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      if (error) return <p>Error!</p>;

      return <MarketsCard markets={markets} />;
    }}
  </Query>
);
