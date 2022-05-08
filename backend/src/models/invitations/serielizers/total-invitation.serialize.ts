import { Exclude, Expose } from 'class-transformer';

export class TotalInvitation {
  @Expose()
  customerId: string;
  @Expose()
  fullName: string;
  @Expose()
  email: string;

  @Exclude()
  total: string;

  @Expose()
  get amount(): number {
    return parseInt(this.total) * 5000;
  }

  constructor(partial: Partial<TotalInvitation>) {
    Object.assign(this, partial);
  }
}
