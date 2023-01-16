export class Tokens {
  constructor(init: Partial<Tokens>) {
    Object.assign(this, init);
    this.Token = "";
    this.RefreshToken = "";
  }
  public Token: string;
  public RefreshToken: string;
}