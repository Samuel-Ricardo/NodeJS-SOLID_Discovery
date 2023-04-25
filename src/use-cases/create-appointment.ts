import { CreateAppointmentRespose, ICreateAppopintmentRequest } from "@Types";
import { Appointment } from "@Entities/appointment";
import { IAppointmentsRepository } from "@/repositories/appointments-repository";

export class CreateAppointment {

  constructor (
    private appointmentRepository: IAppointmentsRepository
  ) {}

  async execute ({
    customer,
    startsAt,
    endsAt,
  }: ICreateAppopintmentRequest): Promise<CreateAppointmentRespose> {

    const overlappingAppointment = await this
        .appointmentRepository
        .findOverlappingAppointment(startsAt, endsAt)

    if (overlappingAppointment) throw new Error('another appointment overlap this appointment')

    const appointment = new Appointment ({
      customer,
      startsAt,
      endsAt,
    })

    await this.appointmentRepository.create(appointment)

    return appointment;
  }
}
