import { Input } from "@nextui-org/react";
import { auth } from "../auth";

export default async function EditUserForm() {
  const session = await auth();
  return (
    <form className="flex flex-col gap-4">
      <Input
        placeholder={session?.user?.name?.split(" ")[0]}
        label="Name"
        isReadOnly
      />
      <Input label="Email" placeholder={session?.user?.email} />
      <Input label="Country" />
      <Input label="Age" />
    </form>
  );
}
