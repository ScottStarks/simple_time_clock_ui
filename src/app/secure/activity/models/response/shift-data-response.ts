import { EmployeeDataResponse } from "./employee-data-response";

export class ShiftDataResponse {
    constructor(init: Partial<ShiftDataResponse>) {
        Object.assign(this, init);
    }
    public id!: number;
    public workShiftStartTime!: Date;
    public workShiftEndTime!: Date;
    public breakStartTime!: Date;
    public breakEndTime!: Date;
    public lunchStartTime!: Date;
    public lunchEndTime!: Date;
    public isShiftActive!: boolean;
    public isBreakActive!: boolean;
    public isLunchActive!: boolean;
    public employee!: EmployeeDataResponse
}