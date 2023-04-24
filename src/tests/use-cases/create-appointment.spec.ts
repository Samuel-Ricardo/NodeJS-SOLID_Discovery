import { VALID_APPOINTMENT_DATA } from "@Config/test";
import { CreateAppointment } from "@/use-cases/create-appointment";
import { describe, expect, it } from "vitest";
import { Appointment } from "@Entities/appointment";

describe('Create Appointment', () => {

  it ('Should be able to create an appointment', () => {
    
    const createAppointment = new CreateAppointment()

    expect ( createAppointment.execute(VALID_APPOINTMENT_DATA()) )
      .resolves
      .toBeInstanceOf(Appointment)
  })
})
