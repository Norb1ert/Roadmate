import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";
import { FaCar } from "react-icons/fa";
import { auth } from "../auth";
import UserMenu from "./UserMenu";

export default async function Nav() {
  const session = await auth();
  const links = [
    { label: "Home", href: "/", id: 1 },
    { label: "Cars", href: "/cars", id: 2 },
    { label: "Guest Area", href: "/profile", id: 3 },
  ];

  return (
    <nav className="flex justify-between px-5 py-5 border-b-small items-center">
      <div className="flex gap-2 items-center">
        <FaCar className="text-blue-600" />

        <p>RoadMate</p>
      </div>

      <div className="flex gap-2 justify-center items-center  ">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="hover:text-blue-500 transition-all duration-300 font-normal "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            as={Link}
            href="/login"
          >
            Sign in
          </Button>
        )}
      </div>
    </nav>
  );
}

{
  /* {session?.user.image ? (
          <img
            src={session.user.image}
            className="h-8 rounded-full"
            alt={session.user.name}
            referrerPolicy="no-reffer"
          /> */
}
