import { Company } from "../../../../../collections";

export default (_, args) => {
  try {
    return Company.create(args);
  } catch (error) {
    throw error;
  }
};
