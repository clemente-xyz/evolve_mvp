import { Fund } from "../../../../../collections";

export default async ({ _id }) => {
  try {
    return Fund.find({ wallet: _id });
  } catch (error) {
    throw error;
  }
};
