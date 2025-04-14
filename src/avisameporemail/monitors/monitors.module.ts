import { Module } from '@nestjs/common';
import { MonitorsService } from './monitors.service';
import { MonitorsController } from './monitors.controller';
import {PrismaService} from "../../common/prisma/prisma.service"

@Module({
  controllers: [MonitorsController],
  providers: [MonitorsService, PrismaService],
})
export class MonitorsModule {}
