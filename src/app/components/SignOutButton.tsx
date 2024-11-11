import { Button } from "@nextui-org/react";
import { signOut } from "../auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button
        className="font-semibold flex items-center text-md border border-blue-500"
        variant="faded"
        color="primary"
        type="submit"
      >
        Sign Out
      </Button>
    </form>
  );
}
