import { Company } from "../../../../../collections";

export default ({ senderUser }) => {
	try {
		return Company.findById(senderUser);
	} catch (error) {
		throw error;
	}
};
