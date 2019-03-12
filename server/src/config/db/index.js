import mongoose from "mongoose";
require("dotenv").config({ path: ".env" });

import { populateMarkets } from "./populations";

mongoose.set("useCreateIndex", true);

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true })
	.then(() => console.log("🍌 DB running..."))
	.catch(error => console.log(error));

populateMarkets();
