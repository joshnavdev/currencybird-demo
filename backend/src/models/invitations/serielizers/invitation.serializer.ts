import { Exclude, Expose } from 'class-transformer';
import { Customer } from 'src/models/customers/entities/customer.entity';
import Invitation from '../entities/invitation.entity';

export class InvitationSerializer extends Invitation {
  @Expose()
  code: string;
  @Expose({ name: 'creationDate' })
  created_at: Date;
  @Expose({ name: 'expirationDate' })
  expiration_date: Date;

  @Exclude()
  customer: Customer;

  constructor(partial: Partial<InvitationSerializer>) {
    super();
    Object.assign(this, partial);
  }
}
