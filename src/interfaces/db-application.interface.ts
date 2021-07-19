import { IssuesType } from 'src/types/issues.type'
import { Status } from 'src/types/common/status.enum'
import { VehicleType } from 'src/types/vehicle.type'

export interface IDbApplication {
  id: number
  clientId: number
  vehicle: VehicleType
  issues: IssuesType
  status: Status
  createdAt: string
  startedAt: string | null
  closedAt: string | null
  closed: boolean
}
