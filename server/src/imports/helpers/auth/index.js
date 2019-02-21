import { verify } from "jsonwebtoken";
import { Company } from "../../collections";

const decodeToken = token => {
  const [bearer, code] = token.split(" ");

  if (bearer !== "Bearer") throw new Error("Bad token format :(");

  return verify(code, process.env.JWT_SECRET);
};

const findAuthUser = req => {
  try {
    const token = req.headers.authorization;

    if (!token) return null;

    return decodeToken(token);
  } catch (error) {
    throw error;
  }
};

const requestAuth = async user => {
  if (!user || !user._id) throw new Error("You are not auth!");

  const me = await Company.findById(user._id);

  if (!me) throw new Error("You are not auth!");

  return me;
};

export default { findAuthUser, requestAuth };
