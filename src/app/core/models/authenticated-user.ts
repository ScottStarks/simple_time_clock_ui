import { Role } from "src/app/enum/role";
import { Tokens } from "./Tokens"

export class AuthenticatedUser {
  constructor(init: Partial<AuthenticatedUser>) {
    Object.assign(this, init);
  }

  public tokens!: Tokens;
  public employeeId!: string;
  public role!: number;

  public get IsAdmin(): boolean {
    return this.role == Role.Admin;
  }
  public get IsNonAdmin(): boolean {
    return this.role == Role.NonAdmin;
  }

}
