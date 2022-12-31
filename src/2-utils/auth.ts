import { Request } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../4-models/UserModel";

// secret key
const secretKey = "inonab";

function getNewToken(user: UserModel): string {
  // create container
  const container = { user };

  // create expiration timeout
  const options = { expiresIn: "3h" };

  // create the token
  const token = jwt.sign(container, secretKey, options);

  return token;
}

async function verifyToken(req: Request): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    try {
      const header = req.header("authorization");
      if (!header) {
        resolve(false);
        return;
      }
      const token = header.substring(7);
      if (!token) {
        resolve(false);
        return;
      }

      jwt.verify(token, secretKey, (error) => {
        if (error) {
          resolve(false);
          return;
        }
      });

      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
}

export default { getNewToken, verifyToken };
