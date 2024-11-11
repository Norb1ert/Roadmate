import SignInButton from "../components/SignInButton";

export default function page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold text-blue-500">
        Sign in to acces your account
      </h2>
      <SignInButton />
    </div>
  );
}
