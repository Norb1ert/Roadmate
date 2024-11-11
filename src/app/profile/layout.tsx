import { ReactNode } from "react";
import { ProfileButton } from "../components/ProfileButton";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-5" style={{ height: `calc(100vh - 75px)` }}>
      <div className="col-span-2   py-8  border-r-2">
        <ProfileButton />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}
