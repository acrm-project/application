import { IApplication } from 'src/interfaces/application.interface'

export class AddApplicationToExistingClientDto {
  readonly clientId: number
  readonly application: IApplication
}
