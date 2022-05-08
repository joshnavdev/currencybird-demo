import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../customers/entities/customer.entity';
import InvitationHistory from './entities/invitation-history.entity';
import Invitation from './entities/invitation.entity';
import { TotalInvitation } from './serielizers/total-invitation.serialize';

@Injectable()
export class InvitationHistoriesService {
  constructor(
    @InjectRepository(InvitationHistory)
    private invitationHistoryRepository: Repository<InvitationHistory>,
  ) {}

  create(
    customer: Customer,
    invitation: Invitation,
  ): Promise<InvitationHistory> {
    const invitationHistory = new InvitationHistory();
    invitationHistory.customer = customer;
    invitationHistory.invitation = invitation;

    return this.invitationHistoryRepository.save(invitationHistory);
  }

  findAll(): Promise<TotalInvitation[]> {
    return this.invitationHistoryRepository
      .createQueryBuilder('invitation_history')
      .select([
        'customer.id as customerId',
        'customer.full_name as fullName',
        'customer.email as email',
        'COUNT(invitation.customer_id) as total',
      ])
      .innerJoin('invitation_history.invitation', 'invitation')
      .innerJoin(Customer, 'customer', 'customer.id = invitation.customer_id')
      .groupBy('invitation.customer_id')
      .orderBy('total', 'DESC')
      .getRawMany<TotalInvitation>();
  }
}
