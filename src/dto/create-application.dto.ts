import { ApplicationFromScratchType } from 'src/types/application.type'

export class CreateApplicationDto {
  readonly clientId: number
  readonly application: ApplicationFromScratchType
}
