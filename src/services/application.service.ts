import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ApplicationEntity } from '../entities/application.entity'

import { IApplication } from '../interfaces/application.interface'
import { Status } from 'src/types/status.enum'

@Injectable()
export class ApplicationService {
  constructor(@InjectRepository(ApplicationEntity) private applicationRepository: Repository<ApplicationEntity>) {}

  public async createApplication(clientId: number, application: IApplication) {
    const applicationDbInstance = this.applicationRepository.create({
      clientId,
      ...application,
      status: Status.CREATED,
      closed: false,
    })
    return this.applicationRepository.save(applicationDbInstance)
  }
}
