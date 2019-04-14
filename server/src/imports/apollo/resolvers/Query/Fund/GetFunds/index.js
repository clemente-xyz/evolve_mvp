import { Fund } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, { wallet }, { user }) => {
  try {
    await requestAuth(user);

    return Fund.find({ wallet });
  } catch (error) {
    throw error;
  }
};
