import { IssuesType } from 'src/types/issues.type'
import { VehicleType } from 'src/types/vehicle.type'

export interface IApplication {
  vehicle: VehicleType
  issues: IssuesType
}
