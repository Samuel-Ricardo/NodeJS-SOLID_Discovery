import { IAppointmentProps } from "@Types";

export class Appointment {
  private props: IAppointmentProps

  constructor (props:IAppointmentProps){ this.props = props }  

  get customer () { return this.props.customer }

  get startsAt () { return this.props.startsAt }

  get endsAt () { return this.props.endsAt }
}
