import "./config/db";
import "./config/cryptoxchange";
import server from "./imports/apollo";

server.listen().then(({ url }) => {
  console.log(`🍔 Evolve server running at ${url}`);
});
