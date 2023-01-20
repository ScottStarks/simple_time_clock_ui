export class ShiftDataRequest {
    constructor(init: Partial<ShiftDataRequest>) {
        Object.assign(this, init);
    }
    public shiftId!: number;
}