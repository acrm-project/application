import { IApplication } from 'src/interfaces/application.interface'

export class CreateApplicationDto {
  readonly clientId: number
  readonly application: IApplication
}
