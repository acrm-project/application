import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { ApplicationService } from './services/application.service'

import { CreateApplicationDto } from './dto/create-application.dto'
import { AddApplicationToExistingClientDto } from './dto/add-application-to-existing-client.dto'

@Controller()
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @MessagePattern('application_create')
  async createApplication(createApplicationDto: CreateApplicationDto) {
    console.log(createApplicationDto)
  }

  @MessagePattern('application_add_to_existing_client')
  async addApplicationToExistingClient(application: AddApplicationToExistingClientDto) {
    console.log(application)
  }

  @MessagePattern('application_find_by_id')
  async findApplicationById(id: number) {
    console.log(id)
  }
}
