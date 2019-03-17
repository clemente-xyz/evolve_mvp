import { Wallet } from "../../../../../collections";

export default ({ wallet }) => {
  try {
    return Wallet.findById(wallet);
  } catch (error) {
    throw error;
  }
};
