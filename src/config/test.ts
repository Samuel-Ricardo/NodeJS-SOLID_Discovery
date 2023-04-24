import { IAppointmentProps } from "@Types";
import { Appointment } from "@/entities/appointment";



export const VALID_APPOINTMENT = () => new Appointment(VALID_APPOINTMENT_DATA())
