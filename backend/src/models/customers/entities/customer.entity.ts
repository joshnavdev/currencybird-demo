import InvitationHistory from 'src/models/invitations/entities/invitation-history.entity';
import Invitation from 'src/models/invitations/entities/invitation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ICustomer from '../interfaces/customer.interface';

@Entity()
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @OneToMany(() => Invitation, (invitation) => invitation.customer)
  invitations: Invitation[];

  @OneToMany(
    () => InvitationHistory,
    (invitationHistory) => invitationHistory.customer,
  )
  invitation_histories: InvitationHistory[];
}
