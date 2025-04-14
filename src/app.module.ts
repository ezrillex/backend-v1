import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './common/prisma/prisma.service';
import { AvisameporemailModule } from './avisameporemail/avisameporemail.module';

@Module({
  imports: [AvisameporemailModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
