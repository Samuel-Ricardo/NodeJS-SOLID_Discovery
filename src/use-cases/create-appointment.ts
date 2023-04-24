import { CreateAppointmentRespose, ICreateAppopintmentRequest } from "@Types";
import { Appointment } from "@Entities/appointment";

export class CreateAppointment {
  async execute ({
    customer,
    startsAt,
    endsAt,
  }: ICreateAppopintmentRequest): Promise<CreateAppointmentRespose> {

    const appointment = new Appointment ({
      customer,
      startsAt,
      endsAt,
    })

    return appointment;
  }
}
