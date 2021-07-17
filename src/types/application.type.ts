import { ClientType } from './client.type'
import { IssuesType } from './issues.type'
import { VehicleType } from './vehicle.type'

export type ApplicationFromScratchType = {
  client: Omit<ClientType, 'id'>
  vehicle: VehicleType
  issues: IssuesType
}
