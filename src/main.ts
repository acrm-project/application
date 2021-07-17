import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { ApplicationModule } from './application.module'

import { ConfigService } from './services/config/config.service'

const configService = new ConfigService()

async function bootstrap() {
  const applicationMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(ApplicationModule, {
    transport: Transport.TCP,
    options: {
      host: configService.get('host'),
      port: configService.get('port'),
    },
  })

  applicationMicroservice.listen(() => console.log('Application microservice is listening...'))
}
bootstrap()
