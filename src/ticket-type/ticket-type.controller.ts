import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';


@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.ticketTypeService.findOne(id);
  }


  @Get()
  async findAll() {
    return this.ticketTypeService.findAll();
  }

}
