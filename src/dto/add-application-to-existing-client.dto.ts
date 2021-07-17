import { ClientType } from 'src/types/client.type'
import { IssuesType } from 'src/types/issues.type'
import { VehicleType } from 'src/types/vehicle.type'

export class AddApplicationToExistingClientDto {
  readonly clientId: number
  readonly client: ClientType
  readonly vehicle: VehicleType
  readonly issues: IssuesType
}
