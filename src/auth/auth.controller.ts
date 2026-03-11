import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './authDto';

@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe)
    registerUser(@Body() userData: AuthDto){
        return {
            Email: `${userData.email}`,
        };
    }
}
