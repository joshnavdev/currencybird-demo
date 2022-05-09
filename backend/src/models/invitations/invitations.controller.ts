import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import CreateInvitationDTO from './dtos/create-invitation.dto';
import { InvitationHistoriesService } from './invitation-histories.service';
import { InvitationsService } from './invitations.service';
import { InvitationSerializer } from './serielizers/invitation.serializer';
import { TotalInvitation } from './serielizers/total-invitation.serialize';

@Controller('invitations')
export class InvitationsController {
  constructor(
    private invitationsService: InvitationsService,
    private invitationHistoriesService: InvitationHistoriesService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async create(
    @Body() body: CreateInvitationDTO,
  ): Promise<InvitationSerializer> {
    const { email, fullName } = body;
    const invitation = await this.invitationsService.createIfExist(
      email,
      fullName,
    );

    return new InvitationSerializer(invitation);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('histories')
  async findAll(): Promise<TotalInvitation[]> {
    const result = await this.invitationHistoriesService.findAll();

    return result.map((item) => new TotalInvitation(item));
  }
}
