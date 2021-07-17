import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApplicationController } from './application.controller'
import { ApplicationService } from './services/application.service'

import { ConfigService } from './services/config/config.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ApplicationController],
  providers: [ConfigService, ApplicationService],
})
export class ApplicationModule {}
