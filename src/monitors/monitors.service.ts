import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {PrismaService} from "../common/prisma/prisma.service";
import {CreateDto} from "./dto/create-dto/create-dto";
import {createClient} from '@supabase/supabase-js'

@Injectable()
export class MonitorsService {
    constructor(private readonly prisma: PrismaService) {}

    async signupForService(createDto: CreateDto) {
        // todo refactor auth into a pipe? however we do need to capture some data regarding the user.

        // todo this should be a server or lookup if there is sdk for nest already
        const supabase = createClient('https://iapzhidgzaqxybnabnfb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcHpoaWRnemFxeHlibmFibmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MjI0MTQsImV4cCI6MjA1OTM5ODQxNH0.Okn_B4gyWqzzHyXnHbGoxODSRbyag6JzPZywNMkXKlE')

        const {data,error} = await supabase.auth.getUser(createDto.token)

        if(data.user){
            await this.prisma.monitors.create({
                data: {
                    duinit: createDto.duinit,
                    year: createDto.year,
                    owner: data.user.id,
                    email: data.user.email,
                }
            })

            return 'success'
        }
        else {
            console.log(error)
            return new InternalServerErrorException(error.message);
        }


    }
}
