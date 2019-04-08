import React, { useState } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";

import { QUERIES } from "../../apollo";
import Card from "../Card";
import { helpers } from "../../utils";
import {
  CurrencyDetailsContainer,
  CurrencyName,
  CurrencyIconContainer,
  MarketDetailsContainer,
} from "./styles";

const { GET_MARKETS } = QUERIES;

const { filterMarketsByPrimaryCur, formatAmount, getCurrencyNameAndIcon } = helpers;

const MarketsCard = ({ markets }) => {
  const [activeMarket] = useState("CLP");
  const filteredMarkets = filterMarketsByPrimaryCur(activeMarket, markets);

  return (
    <Card
      title={{
        text: "Markets",
        alignment: "left",
      }}
      content={(
        <>
          {filteredMarkets.map(({ _id, name, marketBuyPrice }) => {
            if (marketBuyPrice === 0) return null;

            const [primaryCurName, secondaryCurName] = name.split("/");
            const { name: currencyName, icon: currencyIcon } = getCurrencyNameAndIcon(
              primaryCurName,
            );
            const primaryCurrencyPrice = formatAmount(marketBuyPrice);

            return (
              <MarketDetailsContainer key={_id}>
                <CurrencyIconContainer>{currencyIcon}</CurrencyIconContainer>

                <CurrencyDetailsContainer>
                  <CurrencyName>{currencyName}</CurrencyName>
                  <div>
                    {primaryCurrencyPrice}
                    {" "}
                    {secondaryCurName}
                  </div>
                </CurrencyDetailsContainer>
              </MarketDetailsContainer>
            );
          })}
        </>
)}
      buttons={null}
    />
  );
};

MarketsCard.propTypes = {
  markets: PropTypes.array.isRequired,
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
