import jwt from "jsonwebtoken";

const decodeToken = token => {
  const [bearer, code] = token.split(" ");

  if (bearer !== "Bearer") throw new Error("Bad token format :(");

  return jwt.verify(code, process.env.JWT_SECRET);
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

const requestAuth = user => {
  if (!user || !user._id) throw new Error("You are not auth!");
};

export default { findAuthUser, requestAuth };
