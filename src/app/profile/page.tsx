import { auth } from "../auth";

import SignInButton from "../components/SignInButton";

export default async function page() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex justify-center items-center flex-col gap-8 ">
        <p className="text-center text-3xl text-blue-500 font-bold">
          Not authenticated, please sign in to make reservation or edit your
          profile
        </p>
        <SignInButton />
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <p className="font-bold text-lg ">
        Welcome back{" "}
        <span className="font-bold text-blue-500">{session?.user?.name}</span>
      </p>
    </div>
  );
}
