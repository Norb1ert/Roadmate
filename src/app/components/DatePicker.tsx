/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { DateRangePicker } from "@nextui-org/date-picker";

export default function DatePicker() {
  return (
    <DateRangePicker
      label="Select rental period"
      errorMessage="Please select a reservation duration"
    />
  );
}
