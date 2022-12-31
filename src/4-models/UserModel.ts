import roleModel from "./roleModel";

class UserModel {
  public id: number;
  public fName: string;
  public lName: string;
  public userName: string;
  public password: string;
  public role: roleModel;

  public constructor(user: UserModel) {
    this.id = user.id;
    this.fName = user.fName;
    this.lName = user.lName;
    this.userName = user.userName;
    this.password = user.password;
    this.role = user.role;
  }
}

export default UserModel;
