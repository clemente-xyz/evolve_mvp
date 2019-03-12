// import { schedule } from "node-cron";

import { Market } from "../../../../imports/collections";
import helpers from "../../../../imports/helpers";

const { populateMarkets, updateMarkets } = helpers;

export default async () => {
	const currentMarkets = await Market.find({});

	if (!currentMarkets) {
		populateMarkets(Market);
	}

	console.log("No markets updated");
	updateMarkets(Market);
};

//Important: add method refreshData that will be called every time client calls GET_MARKETS query
