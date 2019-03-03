import server from "./imports/apollo";
import "./config/db";
import "./config/cryptoxchange";

server.listen().then(({ url }) => {
  console.log(`🍔 Evolve server running at ${url}`);
});
