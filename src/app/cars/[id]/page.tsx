import { getCarById } from "@/app/actions/carActions";
import {
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

import Image from "next/image";
import React from "react";

import CarModalWindow from "@/app/components/CarModalWindow";
import { auth } from "@/app/auth";

export default async function page({ params }: { params: { id: string } }) {
  const car = await getCarById(params.id);

  if (!car) {
    return <div>No details available</div>;
  }
  const session = await auth();
  const userId = session?.user?.id;
  const carId = params.id;

  return (
    <div className="h-screen px-10 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 justify-center items-center gap-5 grid-rows-2 h-screen">
        <div className="row-span-2">
          <h1 className="text-4xl font-bold text-blue-500 text-center pb-20 ">
            {car.model}
          </h1>
          <Image
            src={car.image}
            alt="Car image"
            width={400}
            height={400}
            className="pt-10"
          />
        </div>
        <div className="row-span-2">
          <Card className="py-10 px-5">
            <CardHeader className="flex justify-centeritems-center">
              <h1 className="text-2xl font-bold text-gray-400">Car details</h1>
            </CardHeader>
            <CardBody>
              <p className="py-2">
                <span className="text-blue-500">Production Year: </span>
                {car.productionYear}
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500">Price: </span>
                {car.price}$
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500"> Description: </span>
                {car.description}
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500">Availability: </span>

                {car.availibility ? "In Stock" : "Out of Stock"}
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500">Seats: </span>
                {car.seats}
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500">Horse Power: </span>
                {car.horsePower} HP
              </p>
              <Divider />
              <p className="py-2">
                <span className="text-blue-500">Fuel Usage: </span>
                {car.fuelUsage} L/100km
              </p>
            </CardBody>
            <CardFooter className="flex flex-col gap-4">
              <CarModalWindow userId={userId} carId={carId} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
