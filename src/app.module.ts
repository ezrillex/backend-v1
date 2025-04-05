import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './common/prisma/prisma.service';
import { MonitorsModule } from './monitors/monitors.module';

@Module({
  imports: [MonitorsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
