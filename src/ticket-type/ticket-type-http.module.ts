import { Module } from '@nestjs/common';
import { TicketTypeModule } from './ticket-type.module';
import { TicketTypeService } from './ticket-type.service';
import { TicketTypeController } from './ticket-type.controller';

@Module({
  imports: [TicketTypeModule],
  providers: [TicketTypeService],
  controllers: [TicketTypeController]
})
export class TicketTypeHttpModule {}
