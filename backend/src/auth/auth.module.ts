import { Module } from '@nestjs/common';
import { CustomersModule } from 'src/models/customers/customers.module';
import { InvitationsModule } from 'src/models/invitations/invitations.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [CustomersModule, InvitationsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
