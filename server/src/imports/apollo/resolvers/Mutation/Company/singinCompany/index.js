import { Company } from "../../../../../collections";

export default async (_, { username, password }) => {
  const company = await Company.findOne({ username });

  if (!company || !company.auth(password))
    throw new Error("Hey, your credentails are not valid");

  return company;
};
