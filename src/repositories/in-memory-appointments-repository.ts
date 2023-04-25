import { Appointment } from "@Entities/appointment";
import { IAppointmentsRepository } from "./appointments-repository";
import { areIntervalsOverlapping } from "date-fns";

export class InMemoryAppointmentsRepository implements IAppointmentsRepository {
  
  public items: Appointment[] = []

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment)
  }

  async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this
      .items
      .find( 
        appointment => areIntervalsOverlapping(
          {start: startsAt, end: endsAt},
          {start: appointment.startsAt, end: appointment.endsAt},
          {inclusive: true}
        ))

    if (!overlappingAppointment) return null;

    return overlappingAppointment;
  }
    
  

} 
