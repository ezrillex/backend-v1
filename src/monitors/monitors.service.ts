import { Injectable } from '@nestjs/common';
import {PrismaService} from "../common/prisma/prisma.service";
import {CreateDto} from "./dto/create-dto/create-dto";

@Injectable()
export class MonitorsService {
    constructor(private readonly prisma: PrismaService) {}

    async signupForService(createDto: CreateDto) {
        return this.prisma.monitors.create({
            data: {
                duinit: createDto.duinit,
                email: createDto.email,
                year: createDto.year,
            }
        })
    }
}
