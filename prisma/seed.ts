import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Add some cars
  await prisma.car.createMany({
    data: [
      {
        model: "Tesla Model S",
        productionYear: 2021,
        price: 200,
        description:
          "A luxury all-electric sedan with cutting-edge technology and exceptional range.",
        image: "/images/tesla.png",
        availibility: true,
        seats: 5,
        horsePower: 1020,
        fuelUsage: 165, // Electric
      },
      {
        model: "Nissan Leaf",
        productionYear: 2020,
        price: 100,
        description:
          "A compact electric car with great efficiency and modern design, ideal for city driving.",
        image: "/images/nissan-leaf.png",
        availibility: true,
        seats: 5,
        horsePower: 214,
        fuelUsage: 50, // Electric
      },
      {
        model: "Porsche Taycan",
        productionYear: 2022,
        price: 250,
        description:
          "A high-performance electric sports sedan with incredible speed and luxury features.",
        image: "/images/porsche-taycan.png",
        availibility: true,
        seats: 4,
        horsePower: 670,
        fuelUsage: 170, // Electric
      },
      {
        model: "Chevrolet Camaro",
        productionYear: 2021,
        price: 130,
        description:
          "A modern muscle car with aggressive styling and track-ready performance.",
        image: "/images/chevrolet-camaro.png",
        availibility: true,
        seats: 4,
        horsePower: 455,
        fuelUsage: 12.4, // L/100 km
      },
      {
        model: "Porsche 911",
        productionYear: 2020,
        price: 299,
        description:
          "A legendary sports car that offers exceptional performance and iconic styling.",
        image: "/images/porsche-911.png",
        availibility: true,
        seats: 4,
        horsePower: 379,
        fuelUsage: 9.0, // L/100 km
      },
      {
        model: "BMW 3 Series",
        productionYear: 2020,
        price: 120,
        description:
          "A compact executive car with a sporty feel, perfect for those who enjoy driving.",
        image: "/images/bmw-3-series.png",
        availibility: true,
        seats: 5,
        horsePower: 382,
        fuelUsage: 7.5, // L/100 km
      },
      {
        model: "Audi A6",
        productionYear: 2021,
        price: 90,
        description:
          "A premium full-size sedan with luxury amenities and cutting-edge technology.",
        image: "/images/audi-a6.png",
        availibility: true,
        seats: 5,
        horsePower: 335,
        fuelUsage: 8.5, // L/100 km
      },
      {
        model: "Toyota Camry",
        productionYear: 2021,
        price: 60,
        description:
          "A practical and reliable family sedan known for its longevity and fuel efficiency.",
        image: "/images/toyota-camry.png",
        availibility: true,
        seats: 5,
        horsePower: 301,
        fuelUsage: 7.6, // L/100 km
      },
      {
        model: "Honda Odyssey",
        productionYear: 2020,
        price: 50,
        description:
          "A versatile and spacious minivan that’s perfect for family trips and long drives.",
        image: "/images/honda-odyssey.png",
        availibility: true,
        seats: 8,
        horsePower: 280,
        fuelUsage: 10.7, // L/100 km
      },
      {
        model: "Range Rover Sport",
        productionYear: 2022,
        price: 150,
        description:
          "A luxury SUV with powerful off-road capabilities and a lavish interior.",
        image: "/images/range-rover-sport.png",
        availibility: true,
        seats: 5,
        horsePower: 518,
        fuelUsage: 12.3, // L/100 km
      },
      {
        model: "Ford Explorer",
        productionYear: 2021,
        price: 70,
        description:
          "A spacious and powerful SUV ideal for both family trips and off-road adventures.",
        image: "/images/ford-explorer.png",
        availibility: true,
        seats: 7,
        horsePower: 400,
        fuelUsage: 11.2, // L/100 km
      },
      {
        model: "Mazda MX-5 Miata",
        productionYear: 2021,
        price: 90,
        description:
          "A lightweight roadster with a fun driving experience, perfect for summer days.",
        image: "/images/mazda-mx5.png",
        availibility: true,
        seats: 2,
        horsePower: 181,
        fuelUsage: 6.9, // L/100 km
      },
      {
        model: "Mini Cooper",
        productionYear: 2022,
        price: 40,
        description:
          "A stylish compact car with fun handling and iconic design, perfect for city driving.",
        image: "/images/mini-cooper.png",
        availibility: true,
        seats: 4,
        horsePower: 189,
        fuelUsage: 6.5, // L/100 km
      },
      {
        model: "Fiat 500",
        productionYear: 2020,
        price: 25,
        description:
          "A quirky, small, and efficient city car, perfect for urban environments and tight spaces.",
        image: "/images/fiat-500.png",
        availibility: true,
        seats: 4,
        horsePower: 135,
        fuelUsage: 5.9, // L/100 km
      },
      {
        model: "Tesla Model X",
        productionYear: 2022,
        price: 199,
        description:
          "A luxury all-electric SUV with incredible range and falcon-wing doors, offering a futuristic experience.",
        image: "/images/tesla-model-x.png",
        availibility: true,
        seats: 7,
        horsePower: 1020,
        fuelUsage: 0, // Electric
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
