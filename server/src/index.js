import server from "./imports/apollo";
import "./config/db";

server.listen().then(({ url }) => {
  console.log(`🍔 Evolve server running at ${url}`);
});
