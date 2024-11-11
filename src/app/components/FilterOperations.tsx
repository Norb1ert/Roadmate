"use client";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FilterOperations() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("price", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-end items-center pr-10 mr-5">
      <Button
        color="primary"
        variant="bordered"
        radius="none"
        onClick={() => handleClick("all")}
        className="hover:bg-blue-600 hover:text-white hover:border hover:border-white"
      >
        All
      </Button>
      <Button
        color="primary"
        variant="bordered"
        radius="none"
        onClick={() => handleClick("lowest-price")}
        className="hover:bg-blue-600 hover:text-white hover:border hover:border-white"
      >
        Lowest Price
      </Button>

      <Button
        color="primary"
        variant="bordered"
        radius="none"
        onClick={() => handleClick("highest-price")}
        className="hover:bg-blue-600 hover:text-white hover:border hover:border-white"
      >
        Highest Price
      </Button>
    </div>
  );
}
