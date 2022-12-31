export class ErrorModel {
  public constructor(public message: string, public status: number) {}
}
export class RouteNotFoundError extends ErrorModel {
  public constructor(route: string) {
    super(`Route ${route} Not Found!`, 404);
  }
}
export class AuthErrorModel extends ErrorModel {
  public constructor(msg: string) {
    super(msg, 401);
  }
}
