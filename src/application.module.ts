import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApplicationController } from './application.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ConfigService } from './services/config/config.service'
import { ApplicationService } from './services/application.service'

import { ApplicationEntity } from './entities/application.entity'

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), TypeOrmModule.forFeature([ApplicationEntity])],
  controllers: [ApplicationController],
  providers: [ConfigService, ApplicationService],
})
export class ApplicationModule {}
