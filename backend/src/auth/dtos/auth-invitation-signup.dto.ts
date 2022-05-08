import { IsEmail, IsString } from 'class-validator';
import { IInvitationSignup } from '../interfaces/invitation-signup.interface';

export class AuthInvitationSignup implements IInvitationSignup {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsString()
  gender: string;

  @IsString()
  invitationCode: string;
}
