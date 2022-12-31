export class ErrorModel {
  public constructor(public message: string, public status: number) {}
}
export class RouteNotFoundError extends ErrorModel {
  public constructor(route: string) {
    super(`Route ${route} Not Found!`, 404);
  }
}

export class ResourceNotFoundError extends ErrorModel {
  public constructor(id: number) {
    super(`ID ${id} Not exist`, 404);
  }
}

export class ValidationModel extends ErrorModel {
  public constructor(message: string) {
    super(message, 400);
  }
}
export class AuthErrorModel extends ErrorModel {
  public constructor(message: string) {
    super(message, 400);
  }
}
