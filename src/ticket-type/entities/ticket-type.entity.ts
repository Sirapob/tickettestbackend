import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm'

@Entity('ticket_type')
export class TicketType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    price?: number;

    @Column()
    amount: number;

    @Column()
    minimum: number;

    @Column()
    date: Date;

    @Column()
    status: string;
}   
