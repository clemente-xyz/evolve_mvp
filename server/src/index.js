import "./config/cryptoxchange";
import "./config/db";
import server from "./imports/apollo";

server.listen().then(({ url }) => {
  console.log(`🍔 Evolve server running at ${url}`);
});
