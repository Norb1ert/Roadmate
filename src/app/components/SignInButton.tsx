import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "../auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/profile" });
      }}
    >
      <Button
        className="font-semibold flex items-center text-md border border-blue-500"
        variant="faded"
        color="primary"
        type="submit"
      >
        <span className="text-blue-500">
          <FaGoogle />
        </span>
        Contine with Google
      </Button>
    </form>
  );
}
