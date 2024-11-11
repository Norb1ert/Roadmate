const baseUrl = "http://localhost:3000/";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Car } from "../types/types";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  return (
    <Card key={car.id} className="">
      <CardHeader className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold pt-5 text-lg">{car.model}</h1>
        <p className="text-gray-400">{car.productionYear}</p>
      </CardHeader>
      <CardBody className="flex justify-center  flex-col items-center">
        <div className="relative w-full h-40 flex justify-center items-center">
          <Image
            src={car.image!}
            alt="product photo"
            className="object-contain"
            width={200}
            height={200}
          />
        </div>

        <div className="flex justify-center items-center gap-5">
          <p>
            {car.availibility === true ? (
              <Button
                color="success"
                size="sm"
                className="text-green-900 uppercase font-bold"
              >
                Available
              </Button>
            ) : (
              <Button
                color="danger"
                size="sm"
                className="text-red-900 font-bold"
              >
                Taken
              </Button>
            )}
          </p>
          <div className="flex gap-2 justify-center items-center ">
            <p className="text-gray-400">
              <MdOutlineAirlineSeatReclineExtra />
            </p>
            <p className="text-gray-400">{car.seats}</p>
          </div>
          <div className="flex gap-2 justify-center items-center  ">
            <p className="text-gray-400 text-bold">
              <FaGasPump />
            </p>
            <p className="text-gray-400 text-bold">{car.fuelUsage} l/100km</p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between pb-5">
        <p className="justify-self-start text-gray-400">
          <span className="font-bold text-xl text-black">{car.price}$ /</span>{" "}
          day
        </p>

        <Button
          variant="bordered"
          radius="sm"
          color="primary"
          as={Link}
          href={`${baseUrl}cars/${car.id}`}
        >
          More info
        </Button>
      </CardFooter>
    </Card>
  );
}
