import { Market } from "../../../../collections";

export default () => {
	try {
		// put here market update helper
		return Market.find({});
	} catch (error) {
		throw error;
	}
};
