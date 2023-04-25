import { IAppointmentProps } from "@Types";
import { Appointment } from "@/entities/appointment";

export const VALID_APPOINTMENT_DATA = () => {

  const startsAt = new Date();
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() + 1)
  endsAt.setDate(startsAt.getDate() + 2)

  return {
    customer: 'John Doe',
    startsAt,
    endsAt,
  } as IAppointmentProps
}

export const VALID_APPOINTMENT = () => new Appointment(VALID_APPOINTMENT_DATA())
