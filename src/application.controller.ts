import { Controller, HttpStatus } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { ApplicationService } from './services/application.service'

import { CreateApplicationDto } from './dto/create-application.dto'
import { AddApplicationToExistingClientDto } from './dto/add-application-to-existing-client.dto'

@Controller()
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @MessagePattern('application_create')
  async createApplication(createApplicationDto: CreateApplicationDto) {
    const { application, clientId } = createApplicationDto

    const applicationDbResponse = await this.applicationService.createApplication(clientId, application)

    return {
      application: applicationDbResponse,
      status: HttpStatus.CREATED,
      error: null,
    }
  }

  @MessagePattern('application_add_to_existing_client')
  async addApplicationToExistingClient(addToExistingClientDto: AddApplicationToExistingClientDto) {
    const { clientId, application } = addToExistingClientDto

    const applicationDbResponse = await this.applicationService.createApplication(clientId, application)

    return {
      application: applicationDbResponse,
      status: HttpStatus.CREATED,
      error: null,
    }
  }

  @MessagePattern('application_find_by_id')
  async findApplicationById(id: number) {
    console.log(id)
  }
}
