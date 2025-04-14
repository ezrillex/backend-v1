import { Module } from '@nestjs/common';
import { MonitorsModule } from './monitors/monitors.module';


@Module({
    imports: [MonitorsModule],
})
export class AvisameporemailModule {}
