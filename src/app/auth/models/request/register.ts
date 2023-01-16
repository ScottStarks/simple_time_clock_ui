export class RegisterRequest {
    constructor(init: Partial<RegisterRequest>) {
      Object.assign(this, init);
    }
    public name!: string;
    public email!: string;
  }