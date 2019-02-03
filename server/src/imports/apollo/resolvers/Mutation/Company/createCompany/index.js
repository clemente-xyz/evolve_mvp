import { Company } from "../../../../../collections";

export default async (_, args) => {
  try {
    const company = await Company.create(args);
    return {
      token: company.createToken()
    };
  } catch (error) {
    throw error;
  }
};
