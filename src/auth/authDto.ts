import { Type } from "class-transformer";
import { IsAlphanumeric, IsDate, IsDateString, IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export enum Country {
    PHL = 'PHL',
    JPN = 'JPN',
    USA = 'USA',
}

export class AuthDto{
    @IsString()
    @Length(3, 20)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(3, {
        message: "Password is too short. Minimum length required is $constraint1 characters.",
    })
    password: string;

    @IsEnum(Country, {
        message: 'Country must be from $constraint1, not $value.',
    })
    country: Country;

    @IsDateString()
    // @Type(() => Date)
    dob: Date;

    @IsOptional()
    @IsNumber()
    // @Matches(/^[0-9]{11}$/, {
    //     message: "Phone number must be exactly 11 digits."
    // })
    phone: number;
}