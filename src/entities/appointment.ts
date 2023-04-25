import { IAppointmentProps } from "@Types";

export class Appointment {
  private props: IAppointmentProps

  constructor (props:IAppointmentProps){ 
  
    const {endsAt, startsAt} = props

    if (endsAt <= startsAt) throw new Error("Invalid end Date")
    if (startsAt < new Date()) throw new Error("Invalid Starts Date")


    this.props = props 
  }  

  get customer () { return this.props.customer }

  get startsAt () { return this.props.startsAt }

  get endsAt () { return this.props.endsAt }
}
