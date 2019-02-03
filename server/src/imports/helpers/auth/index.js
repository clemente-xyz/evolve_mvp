import jwt from "jsonwebtoken";

const decodeToken = token => {
  const [bearer, code] = token.split(" ");

  if (bearer !== "Bearer") throw new Error("Bad token format :(");

  return jwt.verify(code, process.env.JWT_SECRET);
};

export default async req => {
  try {
    const token = req.headers.authorization;

    if (token == null) null;

    const user = await decodeToken(token);

    return user;
  } catch (error) {
    throw error;
  }
};
