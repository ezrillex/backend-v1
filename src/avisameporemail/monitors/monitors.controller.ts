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

}
