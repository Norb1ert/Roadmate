import Link from "next/link";

import SignOutButton from "../components/SignOutButton";

export async function ProfileButton() {
  const links = [
    { label: "Home", href: "/", id: 1 },
    { label: "Reservations", href: "profile/reservations", id: 2 },
    { label: "Edit profile", href: `profile/edit`, id: 3 },
  ];
  return (
    <ul className="flex flex-col gap-4 h-full items-start">
      {links.map((link) => (
        <li key={link.id} className="self-stretch hover:bg-blue-100 py-2">
          <Link
            href={link.href}
            className=" text-blue-500 font-semibold text-md hover:bg-blue-100 py-2 pl-5 block w-full h-full "
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li className="mt-auto w-full self-center pl-5">
        <SignOutButton />
      </li>
    </ul>
  );
}
