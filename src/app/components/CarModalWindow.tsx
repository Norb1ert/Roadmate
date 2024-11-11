"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import DatePicker from "./DatePicker";
import { useState } from "react";
import {
  parseDate,
  getLocalTimeZone,
  CalendarDate,
} from "@internationalized/date";
import { reserveCar } from "../actions/reservationActions";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
  carId: string;
};

export default function CarModalWindow({ userId, carId }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dateRange, setDateRange] = useState<{
    start: CalendarDate;
    end: CalendarDate;
  }>({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });
  const router = useRouter();
  const timeZone = getLocalTimeZone();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission triggered");

    if (!email || !name || !age) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await reserveCar({
        userId,
        carId,
        email,
        name,
        age,
        startDate: dateRange.start.toDate(timeZone),
        endDate: dateRange.end.toDate(timeZone),
      });
      alert("Reservation successful!");
      console.log("Success");
      router.push("/profile/reservations");
    } catch (error) {
      alert("Failed to reserve a car");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="text-white font-semibold"
      >
        Reserve now
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-blue-500 font-semibold text-lg">
                Reservation
              </ModalHeader>
              <ModalBody className="px-3 py-2">
                <div className="flex flex-col gap-5">
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <Input
                      autoFocus
                      isRequired
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      isRequired
                      type="text"
                      label="Name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      isRequired
                      type="number"
                      label="Driver's age"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <DatePicker value={dateRange} onChange={setDateRange} />

                    <Button
                      type="submit"
                      color="primary"
                      className="text-white font-semibold"
                      onClick={() => console.log("Submit button clicked")}
                    >
                      Reserve
                    </Button>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose} fullWidth>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
