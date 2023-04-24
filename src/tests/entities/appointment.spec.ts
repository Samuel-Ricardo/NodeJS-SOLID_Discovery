import { Appointment } from "@Entities/appointment"
import { VALID_APPOINTMENT, VALID_APPOINTMENT_DATA } from "@Config/test"
import { expect, test} from "vitest"

test('Create an appointment', () => {
  const appointment = VALID_APPOINTMENT()

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual(VALID_APPOINTMENT_DATA().customer)
})
