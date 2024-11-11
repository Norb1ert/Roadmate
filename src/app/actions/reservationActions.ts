"use server";

import { prisma } from "../lib/prisma";

type ReserveCarInput = {
  userId: string;
  carId: string;
  email: string;
  name: string;
  age: string;
  startDate: Date;
  endDate: Date;
};

export async function reserveCar(data: ReserveCarInput) {
  try {
    console.log("Start Date:", data.startDate);
    console.log("End Date:", data.endDate);
    await prisma.rental.create({
      data: {
        userId: data.userId,
        carId: data.carId,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    });
    console.log("Car reserved successfully");
  } catch (error) {
    console.error("Error reserving car:", error);
    throw new Error(`Reservation failed `);
  }
}
