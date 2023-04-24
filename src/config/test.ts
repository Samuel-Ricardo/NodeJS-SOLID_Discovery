import { IAppointmentProps } from "@Types";
import { Appointment } from "@/entities/appointment";

export const VALID_APPOINTMENT_DATA = () => {

  const startsAt = new Date();
  const endsAt = new Date()

  endsAt.setDate(startsAt.getDate()+0)

  return {
    customer: 'John Doe',
    startsAt,
    endsAt,
  } as IAppointmentProps
}

export const VALID_APPOINTMENT = () => new Appointment(VALID_APPOINTMENT_DATA())
