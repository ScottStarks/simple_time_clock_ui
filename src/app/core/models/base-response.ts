export class BaseResponse<T> {
    constructor(init: Partial<BaseResponse<T>>) {
      Object.assign(this, init);
    }
    public message!: string;
    public data!: T;
  }