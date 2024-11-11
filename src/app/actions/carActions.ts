import { prisma } from "../lib/prisma";

export async function getCars() {
  try {
    return await prisma.car.findMany();
  } catch (error) {
    console.log(error);
  }
}

export async function getCarById(id: string) {
  try {
    const car = await prisma.car.findUnique({ where: { id } });
    return car;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCarByChepestPrice() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: {
        price: "asc",
      },
    });
    return cars;
  } catch (error) {
    console.log(error);
  }
}

export async function getCarByMostExpensivePrice() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: {
        price: "desc",
      },
    });
    return cars;
  } catch (error) {
    console.log(error);
  }
}

export async function getCarByAvailability() {
  try {
    const cars = await prisma.car.findMany({
      where: {
        availibility: true,
      },
    });
    return cars;
  } catch (error) {
    console.log(error);
  }
}
