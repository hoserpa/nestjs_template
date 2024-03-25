import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { MensajesService } from './mensajes/mensajes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'nestjs_app',
      entities: [Mensaje],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]),
    ConfigModule.forRoot(),
    ConfigModule.forRoot({ cache: true }),
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
