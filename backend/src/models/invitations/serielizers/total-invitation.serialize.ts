import { Expose, Transform } from 'class-transformer';

export class TotalInvitation {
  @Expose()
  customerId: string;
  @Expose()
  fullName: string;
  @Expose()
  email: string;

  @Expose()
  @Transform(({ value }) => parseInt(value))
  total: number;

  @Expose()
  get amount(): number {
    return this.total * 5000;
  }

  constructor(partial: Partial<TotalInvitation>) {
    Object.assign(this, partial);
  }
}
