"use server";

import { auth, signOut } from "../auth";
import { prisma } from "../lib/prisma";

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

export async function getAuthUserId() {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error("Unauthorized");

  return userId;
}

export async function getUser(id: string) {
  try {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserByEmail(email: string) {
  await prisma.user.findUnique({ where: { email } });
}
