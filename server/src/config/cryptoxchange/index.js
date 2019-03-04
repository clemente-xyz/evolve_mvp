import Orionx from "orionx-sdk";
require("dotenv").config({ path: ".env" });

Orionx.setCredentials({
  apiKey: process.env.ORIONX_APIKEY,
  secretKey: process.env.ORIONX_SECRET_KEY,
  apiUri: process.env.ORIONX_API_URL
});
