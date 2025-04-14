import {IsEmail, IsInt, IsJWT, IsString, Max, Min} from "class-validator";

export class CreateDto {
    @IsInt()
    @Min(2020)
    @Max(2024)
    year: number;

    // @IsString()
    // @IsEmail()
    // email: string;

    @IsString()
    @IsJWT()
    token: string;

    // todo maybe build a pipe to validate this
    @IsString()
    duinit: string;
}
