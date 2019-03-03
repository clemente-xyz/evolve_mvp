import { Wallet } from "../../../../../collections";

import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);

    return Wallet.find({});
  } catch (error) {
    throw error;
  }
};
