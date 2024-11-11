import EditUserForm from "@/app/components/EditUserForm";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";

export default async function page() {
  return (
    <div className="px-6 pt-6">
      <Card>
        <CardHeader className="text-blue-500 font-bold">
          Edit Profile
        </CardHeader>
        <CardBody>
          <EditUserForm />
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
