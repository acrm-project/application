import { HttpStatus } from '@nestjs/common'
import { Error } from '../types/common/error.type'

import { IDbApplication } from '../entities/application.entity'

export interface IFindApplicationByIdResponse {
  application?: IDbApplication
  status: HttpStatus
  error?: Error
}
