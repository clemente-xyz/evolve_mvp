import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    const me = await requestAuth(user);
    return me;
  } catch (error) {
    throw error;
  }
};
