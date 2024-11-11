import { auth } from "../../auth";
import SignInButton from "../../components/SignInButton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const reservationData = {
  carModel: "Tesla Model S",
  rentalPeriod: "Mon, Jun 12 2024 - Sun, Jun 18 2024",
  price: 400,
  driverAge: 25,
  bookedOn: "11 Jun 2024 11:24",
};

export default async function page() {
  const session = await auth();

  if (!session) {
    return (
      <div className=" h-screen flex justify-center items-center flex-col gap-8 pb-10">
        <p className="text-center text-3xl text-blue-500 font-bold">
          Not authenticated, please sign in to make reservation or edit your
          profile
        </p>
        <SignInButton />
      </div>
    );
  }

  return (
    <Card className="py-4 px-4 mx-5 my-5">
      <CardBody>
        <div>
          <div>
            <h2 className="text-lg text-blue-500 font-semibold">
              {reservationData.carModel}
            </h2>
            <Divider />
            <p className="text-gray-400">{reservationData.rentalPeriod}</p>
            <div className="flex justify-between pt-4">
              <div className="flex gap-6">
                <p className="text-yellow-700 font-bold">
                  ${reservationData.price}
                </p>
                <p>Age: {reservationData.driverAge}</p>
              </div>
              <p>Booked on: {reservationData.bookedOn}</p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
