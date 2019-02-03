import { Company } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);
    return Company.findById(user._id);
  } catch (error) {
    throw error;
  }
};
