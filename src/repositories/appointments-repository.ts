import { Appointment } from "@/entities/appointment";

export interface IAppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  save(appointment: Appointment): Promise<Void>;
}
