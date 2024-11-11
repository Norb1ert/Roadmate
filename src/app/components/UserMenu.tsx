"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Session } from "next-auth";
import Link from "next/link";
import { signOutUser } from "../actions/authActions";

type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          color="secondary"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image}
          isBordered
        />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection>
          <DropdownItem isReadOnly as="span" aria-label="username" showDivider>
            Signed in as {user?.name}
          </DropdownItem>
          <DropdownItem as={Link} href="/profile/edit">
            Edit profile
          </DropdownItem>
          <DropdownItem
            color="danger"
            className="font-bold text-red-500"
            onClick={async () => signOutUser()}
          >
            Log out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
