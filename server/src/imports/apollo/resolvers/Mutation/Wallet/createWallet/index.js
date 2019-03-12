import { Wallet } from "../../../../../collections";
import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, { ownerId }, { user }) => {
	try {
		await requestAuth(user);

		const currentAuthUserId = user._id;

		if (ownerId !== currentAuthUserId) {
			throw new Error(
				"Owner id provided dont match with current company id in session"
			);
		}

		return Wallet.create({ owner: currentAuthUserId, balance: 0 });
	} catch (error) {
		return error;
	}
};
