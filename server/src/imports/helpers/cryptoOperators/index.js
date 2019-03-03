import Orionx from "orionx-sdk";

Orionx.setCredentials({
  apiKey: "NyCQb5cYvJP4DwtWN6uaxgBmtNyrQhyEZB",
  secretKey: "obwFw6TCsjXY5PBy34xHXr6cLjqE7qS3WY",
  apiUri: "https://api2.orionx.io/graphql"
});

// And then use this in any Component.js
Orionx.market({ code: "LTCBTC" })
  .then(function(market) {
    console.log(market);
  })
  .catch(function(err) {
    console.log(err);
  });
