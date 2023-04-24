import { Appointment } from "@Entities/appointment"
import { VALID_APPOINTMENT, VALID_APPOINTMENT_DATA } from "@Config/test"
import { expect, test} from "vitest"

test('Create an appointment', () => {
  const appointment = VALID_APPOINTMENT()

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual(VALID_APPOINTMENT_DATA().customer)
})

test('cannot create an appointment with end date vefore start date', () => {
  const valid_data = VALID_APPOINTMENT_DATA();
  
  const endsAt = new Date();
  endsAt.setDate(valid_data.startsAt.getDate() - 1)

  expect(new Appointment({
    ...valid_data,
    endsAt,
  })).toThrow()

})
