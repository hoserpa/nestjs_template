import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll(): Promise<Mensaje[]> {
    return await this.mensajeRepository.find();
  }

  async createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje> {
    const nuevo = new Mensaje();
    nuevo.nick = mensajeNuevo.nick;
    nuevo.mensaje = mensajeNuevo.mensaje;

    return await this.mensajeRepository.save(nuevo);
  }

  async updateMensaje(
    idMensaje: number,
    mensajeActualizar: CreateMensajeDto,
  ): Promise<Mensaje> {
    const mensajeUpdate = await this.mensajeRepository.findOneBy({
      id: idMensaje,
    });
    mensajeUpdate.nick = mensajeActualizar.nick;
    mensajeUpdate.mensaje = mensajeActualizar.mensaje;

    return await this.mensajeRepository.save(mensajeUpdate);
  }

  async deleteMensaje(idMensaje: number): Promise<any> {
    return await this.mensajeRepository.delete(idMensaje);
  }
}
