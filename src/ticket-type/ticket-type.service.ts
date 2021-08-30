import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {TicketTypeInterface} from './entities/ticket-type.interface'
import {TicketType} from './entities/ticket-type.entity'
import { async } from 'rxjs';


@Injectable()
export class TicketTypeService {
  constructor(
  @InjectRepository(TicketType)
  private readonly TicketTypeRepository: Repository<TicketType>,
  ){}


  async findOne(idValue: number): Promise<TicketType>{
    const ticket_type =  this.TicketTypeRepository.findOne(idValue);
    // const ticket_type =  this.TicketTypeRepository.createQueryBuilder('t').where('t.id = '+1).select(['t.id','t.type']).getOne();
      
    return await ticket_type;
  }

  async findAll(){
    const ticket_type_all =  this.TicketTypeRepository.find();
    return await ticket_type_all;
  }


}
