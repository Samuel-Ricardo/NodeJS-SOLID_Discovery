import { getNextYear } from "@/utils/date";
import { expect, test } from "vitest";

test('INcreases date with one year', () => expect(
  getNextYear(`${new Date().getFullYear()}-08-10`)
  .getFullYear())
  .toEqual(new Date().getFullYear()+1)
)
