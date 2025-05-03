import {Body, Controller, Get, Post} from '@nestjs/common';
import { MonitorsService } from './monitors.service';
import {CreateDto} from "./dto/create-dto/create-dto";

@Controller('monitors')
export class MonitorsController {
  constructor(private readonly monitorsService: MonitorsService) {}

  @Post('create')
  async create(@Body() createDto: CreateDto) {
    console.log('triggered')
    return this.monitorsService.signupForService(createDto);
  }

  @Get('work')
  getWork(){
    return this.monitorsService.getImmediateWork();
  }

  @Get('debug')
  debug(){
    const start = performance.now()
    const now = new Date()
    const block = (now.getHours() * 60) + now.getMinutes()
    const slot = Math.floor(now.getSeconds() / 15) + 1
    const end = performance.now()
    console.log(`Time: ${now.toLocaleString()} Block: ${block}, slot: ${slot}, performance: ${end-start}ms`)
    return 'done'
  }

}
