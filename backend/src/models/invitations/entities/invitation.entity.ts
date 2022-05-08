import { Customer } from 'src/models/customers/entities/customer.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import IInvitation from '../interfaces/invitation.interface';
import InvitationHistory from './invitation-history.entity';

@Entity()
export default class Invitation implements IInvitation {
  @PrimaryGeneratedColumn('uuid')
  code: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @CreateDateColumn({ nullable: true })
  expiration_date: Date;

  @ManyToOne(() => Customer, (customer) => customer.invitations)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(
    () => InvitationHistory,
    (invitationHistory) => invitationHistory.invitation,
  )
  invitation_histories: InvitationHistory[];
}
