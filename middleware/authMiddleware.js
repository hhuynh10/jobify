import { UnauthenticatedError } from "../errors/customErrors.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  // if (!token) {
  //   throw new UnauthenticatedError("authentication invalid");
  // }

  console.log(token);
  next();
};
