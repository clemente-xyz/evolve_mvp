import { Fund } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);

    return Fund.create(args);
  } catch (error) {
    throw error;
  }
};
