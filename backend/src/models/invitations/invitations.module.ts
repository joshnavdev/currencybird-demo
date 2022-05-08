import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Invitation from './entities/invitation.entity';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { CustomersModule } from '../customers/customers.module';
import { InvitationHistoriesService } from './invitation-histories.service';
import InvitationHistory from './entities/invitation-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invitation, InvitationHistory]),
    CustomersModule,
  ],
  providers: [InvitationsService, InvitationHistoriesService],
  exports: [InvitationsService, InvitationHistoriesService],
  controllers: [InvitationsController],
})
export class InvitationsModule {}
