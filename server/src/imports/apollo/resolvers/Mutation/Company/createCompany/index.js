import { Company, Wallet } from "../../../../../collections";

export default async (_, args) => {
  try {
    const company = await Company.create({ ...args });

    const wallet = await Wallet.create({ balance: 0, owner: company._id });

    await Company.updateOne({ _id: company._id }, { wallet: wallet._id });

    return {
      token: company.createToken()
    };
  } catch (error) {
    throw error;
  }
};
