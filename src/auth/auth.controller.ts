import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './authDto';
import { PhoneAuth } from './customPipe/phoneAuth';

@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe, PhoneAuth)
    registerUser(@Body() userData: AuthDto){
        return {
            data: userData,
        };
    }
}
