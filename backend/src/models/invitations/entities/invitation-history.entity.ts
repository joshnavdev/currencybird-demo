import { Customer } from 'src/models/customers/entities/customer.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IInvitationHistory from '../interfaces/invitation-history.interface';
import Invitation from './invitation.entity';

@Entity()
export default class InvitationHistory implements IInvitationHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @ManyToOne(() => Customer, (customer) => customer.invitation_histories)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Invitation, (invitation) => invitation.invitation_histories)
  @JoinColumn({ name: 'invitation_code' })
  invitation: Invitation;
}
