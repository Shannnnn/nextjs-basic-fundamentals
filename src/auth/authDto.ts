import { IsAlphanumeric, IsEmail } from "class-validator";

export class AuthDto{
    @IsEmail()
    email: string;

    @IsAlphanumeric()
    password: string;
}