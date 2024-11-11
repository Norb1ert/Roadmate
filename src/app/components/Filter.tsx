import { getCars } from "../actions/carActions";
import CarCard from "../components/CarCard";

export default async function Filter({ filter }) {
  const cars = await getCars();

  if (!cars.length) return null;
  let displayedCars;
  if (filter === "all") displayedCars = cars;
  if (filter === "lowest-price")
    displayedCars = cars?.filter((car) => car.price <= 120);
  if (filter === "highest-price")
    displayedCars = cars?.filter((car) => car.price > 170);

  return (
    <div className="flex py-3 flex-col px-5">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center py-10 px-10">
        {displayedCars?.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
}
