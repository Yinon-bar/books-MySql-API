import { OkPacket } from "mysql";
import auth from "../2-utils/auth";
import dal from "../2-utils/dal";
import CredentialsModel from "../4-models/CredentialsModel";
import { AuthErrorModel } from "../4-models/errorModels";
import UserModel from "../4-models/UserModel";

async function registerUser(user: UserModel): Promise<string> {
  // Validation
  // create new user query
  const SQL = `
    INSERT INTO users (firstName, lastName, userName, password, role)
    VALUES ('${user.fName}', '${user.lName}','${user.userName}', '${user.password}', ${user.role});
  `;

  // call the create token option
  const token = auth.getNewToken(user);
  // console.log(token);

  // user.password = token;
  await dal.execute(SQL);
  return token;
}

async function logIn(credentials: CredentialsModel): Promise<string> {
  // if user is not valid
  const SQL = `
  SELECT * FROM users 
  WHERE userName = '${credentials.userName}'
  AND password = '${credentials.password}';
`;

  const user = await dal.execute(SQL);
  console.log(user);

  if (user.length === 0) {
    throw new AuthErrorModel("Username or password are incorrect!");
  }
  const token = auth.getNewToken(user);
  return token;
}

export default {
  registerUser,
  logIn,
};
