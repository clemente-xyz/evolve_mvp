import { Company } from "../../../../../collections";

export default ({ receiverUser }) => {
	try {
		return Company.findById(receiverUser);
	} catch (error) {
		throw error;
	}
};
