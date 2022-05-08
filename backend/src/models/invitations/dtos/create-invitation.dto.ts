import { IsEmail, IsString } from 'class-validator';

export default class CreateInvitationDTO {
  @IsEmail()
  email: string;

  @IsString()
  fullName: string;
}
