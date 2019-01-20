import { Company } from "../../../../../collections";

export default () => {
  try {
    return Company.find({});
  } catch (error) {
    throw error;
  }
};
