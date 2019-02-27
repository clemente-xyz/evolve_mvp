import helpers from "../../../../../helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  if (!user) {
    return null;
  }
  const me = await requestAuth(user);
  return me;
};
