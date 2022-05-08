import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthInvitationSignup } from './dtos/auth-invitation-signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('invitation-signup')
  @HttpCode(HttpStatus.NO_CONTENT)
  invitationSignup(@Body() body: AuthInvitationSignup) {
    return this.authService.invitationSignup(body);
  }

  @Post('test')
  test(@Body() body: any, @Headers() headers: any) {
    console.log(body);
    console.log(headers);
    return body;
  }
}
