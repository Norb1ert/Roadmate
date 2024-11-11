import React from "react";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 py-10 px-10 lg:flex-row h-screen">
        <div className="flex flex-col">
          <h1 className="text-6xl pb-4">
            Welcome to RoadMate - Find your dram car now!
          </h1>
          <p className="pb-4 text-gray-500">
            Exeptional renting eperience with best mantained and best suited
            cars for you
          </p>
          <div>
            <Button
              radius="md"
              color="primary"
              variant="solid"
              as={Link}
              href="/cars"
            >
              Explore cars
            </Button>
          </div>
        </div>
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px]">
          <div
            className="absolute inset-0   bg-[url('/images/hero-bg.png')] bg-repeat-round -z-10 left-20"
            style={{
              backgroundImage: "url('/images/hero-bg.png') ",
            }}
          ></div>

          <div className="relative w-full h-full">
            <Image
              src="/images/hero.png"
              alt="Hero image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
