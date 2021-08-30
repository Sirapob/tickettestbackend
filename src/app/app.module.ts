import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TicketTypeModule} from '../ticket-type/ticket-type.module'
import {TicketType} from '../ticket-type/entities/ticket-type.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.URL_CONNECT_DATABASE||'localhost',
      port: parseInt(process.env.PORT_CONNECT_DATABASE)||3306,
      username: 'user',
      password: 'userpassword',
      database: 'docker',
      entities: [TicketType],
      synchronize: false,
      logging: true,
      autoLoadEntities: true,
    }),
    TicketTypeModule
  ],
  controllers: [AppController],
  providers: [AppService]
})


// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
