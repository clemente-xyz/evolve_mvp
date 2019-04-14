import { Company } from "../../../../collections";

export default async (_, { username, password }) => {
  try {
    const company = await Company.findOne({ username });

    if (!company || !company.auth(password))
      throw new Error("Hey, your credentails are not valid");

    return { token: company.createToken() };
  } catch (error) {
    throw error;
  }
};
