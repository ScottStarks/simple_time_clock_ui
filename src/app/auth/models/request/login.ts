export class LoginRequest {
    constructor(init: Partial<LoginRequest>) {
      Object.assign(this, init);
    }
    public employeeId!: string;
}