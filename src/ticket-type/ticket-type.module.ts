import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';
import { TicketTypeController } from './ticket-type.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TicketType } from '../ticket-type/entities/ticket-type.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([TicketType]),
  ],
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
