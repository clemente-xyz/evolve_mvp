import { Market } from "../../../../collections";
import helpers from "../../../../helpers";

const { updateMarkets } = helpers;

export default async () => {
  try {
    await updateMarkets(Market);

    return Market.find({});
  } catch (error) {
    throw error;
  }
};
