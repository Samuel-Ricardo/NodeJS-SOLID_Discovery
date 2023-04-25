import { VALID_APPOINTMENT_DATA } from "@Config/test";
import { CreateAppointment } from "@/use-cases/create-appointment";
import { describe, expect, it } from "vitest";
import { Appointment } from "@Entities/appointment";
import { InMemoryAppointmentsRepository } from "@/repositories/in-memory-appointments-repository";
import { getNextYear } from "@/utils/date";

describe('Create Appointment', () => {

  it ('Should be able to create an appointment', () => {
    
    const createAppointment = new CreateAppointment(new InMemoryAppointmentsRepository())

    expect ( createAppointment.execute(VALID_APPOINTMENT_DATA()) )
      .resolves
      .toBeInstanceOf(Appointment)
  })

  it('Should not be able to create an appointment with overlapping dates', async () => {
    const createAppointment = new CreateAppointment(new InMemoryAppointmentsRepository())
  
    await createAppointment.execute(
      {
        customer: 'John Doe',
        startsAt: getNextYear('2022-08-10'),
        endsAt: getNextYear('2022-08-15')
      }
    )

    expect(createAppointment.execute({
        customer: 'Tony',
        startsAt: getNextYear('2022-08-14'),
        endsAt: getNextYear('2022-08-18')
      })
    ).rejects.toBeInstanceOf(Error)

    expect(createAppointment.execute(
      {
        customer: 'Pedro <:()',
        startsAt: getNextYear('2022-08-08'),
        endsAt: getNextYear('2022-08-12')
      }
    )).rejects.toBeInstanceOf(Error)

  })
})
