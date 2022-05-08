import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './models/customers/customers.module';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDatabaseConfig } from './config/config.interface';
import { Customer } from './models/customers/entities/customer.entity';
import { InvitationsModule } from './models/invitations/invitations.module';
import Invitation from './models/invitations/entities/invitation.entity';
import InvitationHistory from './models/invitations/entities/invitation-history.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const database = config.get<IDatabaseConfig>('database');
        return {
          type: 'mysql',
          host: database.host,
          port: database.port,
          username: database.user,
          password: database.pass,
          database: database.name,
          entities: [Customer, Invitation, InvitationHistory],
          synchronize: true,
        };
      },
    }),
    AuthModule,
    CustomersModule,
    InvitationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
