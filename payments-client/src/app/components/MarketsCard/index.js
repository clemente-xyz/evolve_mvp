import React, { useState } from "react";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";
import Card from "../Card";
import { helpers } from "../../utils";
import {
  CurrencyDetailsContainer,
  CurrencyName,
  CurrencyIconContainer,
  MarketDetailsContainer
} from "./styles";

const { GET_MARKETS } = QUERIES;

const {
  filterMarketsByPrimaryCur,
  formatAmount,
  getCurrencyNameAndIcon
} = helpers;

const MarketsCard = ({ markets }) => {
  const [activeMarket, setActiveMarket] = useState("CLP");
  const filteredMarkets = filterMarketsByPrimaryCur(activeMarket, markets);
  return (
    <Card
      title="Markets"
      content={
        <>
          <p>Chilean market (CLP)</p>
          {filteredMarkets.map(({ _id, name, primaryCurBuyPrice }) => {
            const [primaryCurName, secondaryCurName] = name.split("/");
            const {
              name: currencyName,
              icon: currencyIcon
            } = getCurrencyNameAndIcon(primaryCurName);
            const primaryCurrencyPrice = formatAmount(primaryCurBuyPrice);

            return (
              <MarketDetailsContainer key={_id}>
                <CurrencyIconContainer>{currencyIcon}</CurrencyIconContainer>

                <CurrencyDetailsContainer>
                  <CurrencyName>{currencyName}</CurrencyName>
                  <div>
                    {primaryCurrencyPrice} {secondaryCurName}
                  </div>
                </CurrencyDetailsContainer>
              </MarketDetailsContainer>
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
