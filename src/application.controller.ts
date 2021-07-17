import { Controller, Get } from '@nestjs/common'
import { ApplicationService } from './services/application.service'

@Controller()
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}
}
