import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/entities/customer.entity';
import Invitation from './entities/invitation.entity';

@Injectable()
export class InvitationsService {
  constructor(
    @InjectRepository(Invitation)
    private invitationRepository: Repository<Invitation>,
    private customersService: CustomersService,
  ) {}

  findOne(code: string): Promise<Invitation> {
    return this.invitationRepository.findOne({ where: { code } });
  }

  async validateCode(code: string): Promise<boolean> {
    const invitation = await this.invitationRepository
      .createQueryBuilder('invitation')
      .where(
        'invitation.code = :code AND invitation.expiration_date >= NOW()',
        { code },
      )
      .getOne();

    return !!invitation;
  }

  async create(customer: Customer): Promise<Invitation> {
    const invitationPlain = new Invitation();
    invitationPlain.customer = customer;
    const date = new Date();
    date.setDate(date.getDate() + 1);
    invitationPlain.expiration_date = date;

    return await this.invitationRepository.save(invitationPlain);
  }

  async createIfExist(email: string, fullName: string): Promise<Invitation> {
    const customer = await this.customersService.findByEmail(email);

    if (!customer || customer.full_name !== fullName) {
      throw new NotFoundException('Customer not found');
    }

    let invitation = await this.findOneValidatedByCustomer(customer.id);

    if (!invitation) {
      invitation = await this.create(customer);
    }

    return invitation;
  }

  async findOneValidatedByCustomer(customerId: string): Promise<Invitation> {
    const invitation = await this.invitationRepository
      .createQueryBuilder('invitation')
      .where(
        'invitation.customer_id = :customerId AND invitation.expiration_date >= NOW()',
        { customerId },
      )
      .getOne();

    return invitation;
  }

  findAll(): Promise<Invitation[]> {
    return this.invitationRepository.find();
  }
}
