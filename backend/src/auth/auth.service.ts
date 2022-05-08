import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomersService } from 'src/models/customers/customers.service';
import { InvitationHistoriesService } from 'src/models/invitations/invitation-histories.service';
import { InvitationsService } from 'src/models/invitations/invitations.service';
import { AuthInvitationSignup } from './dtos/auth-invitation-signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomersService,
    private invitationsService: InvitationsService,
    private invitationHistoriesService: InvitationHistoriesService,
  ) {}

  async invitationSignup(authInvitationSignup: AuthInvitationSignup) {
    const { name, email, address, gender, invitationCode } =
      authInvitationSignup;
    const customer = await this.customerService.findByEmail(email);

    if (customer) {
      throw new BadRequestException('Email is already use');
    }

    const isCodeValid = await this.invitationsService.validateCode(
      invitationCode,
    );

    if (!isCodeValid) {
      throw new BadRequestException('Invitation code expired');
    }

    const invitation = await this.invitationsService.findOne(invitationCode);
    const newCustomer = await this.customerService.create({
      name,
      email,
      address,
      gender,
    });

    return this.invitationHistoriesService.create(newCustomer, invitation);
  }
}
