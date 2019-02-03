import { Company } from "../../../../../collections";

export default (_, args, context) => {
  try {
    console.log("Context: ", context);
    return Company.find({});
  } catch (error) {
    throw error;
  }
};
