export class Tokens {
  constructor(init: Partial<Tokens>) {
    Object.assign(this, init);
    this.token = "";
    this.refreshToken = "";
  }
  public token: string;
  public refreshToken: string;
}