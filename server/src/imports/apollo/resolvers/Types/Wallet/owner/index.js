import { Company } from "../../../../../collections";

export default ({ owner }) => {
  try {
    return Company.findById(owner);
  } catch (error) {
    throw error;
  }
};
