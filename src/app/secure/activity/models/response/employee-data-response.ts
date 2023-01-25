export class EmployeeDataResponse {
    constructor(init: Partial<EmployeeDataResponse>) {
        Object.assign(this, init);
    }
    public id!: string;
    public Name!: string;
    public Email!: string;
    public Role!: number;
}