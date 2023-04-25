import { Appointment } from "@Entities/appointment"
import { VALID_APPOINTMENT, VALID_APPOINTMENT_DATA } from "@Config/test"
import { expect, test} from "vitest"

test('Create an appointment', () => {
  const appointment = VALID_APPOINTMENT()

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual(VALID_APPOINTMENT_DATA().customer)
})

test('cannot create an appointment with end date before start date', () => {
  const valid_data = VALID_APPOINTMENT_DATA();
  
  const endsAt = new Date();
  endsAt.setDate(valid_data.startsAt.getDate() - 1)

  expect(() => new Appointment({
    ...valid_data,
    endsAt,
  })).toThrow() 
})

test('Should not be able to create a appointment with start date before now', () => {
  
    const data = VALID_APPOINTMENT_DATA();

    data.startsAt.setDate(data.startsAt.getDate() - 1);
    data.endsAt.setDate(data.endsAt.getDate() +2);

    expect(() => new Appointment(data)).toThrow()
})
