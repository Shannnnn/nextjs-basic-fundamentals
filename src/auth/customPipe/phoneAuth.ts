import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PhoneAuth implements PipeTransform {
    transform(value: any) {
        const phoneNumber = String(value.phone);
        const regex = /^\d{11}$/;

        if(!regex.test(phoneNumber)){
            throw new BadRequestException(
                'Phone must be 11 digits.',
            );
        }
        return value;
    }
}