import Frame from "@icons/frame2.svg";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { UserActionsProps } from "./types";

const UserActions: React.FC<UserActionsProps> = ({ toggleDropdown }) => {
  return (
    <>
      <SignedOut>
        <div onClick={toggleDropdown}>
          <Frame style={{ width: "auto", height: "auto" }} />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-1.5">
          <UserButton />
        </div>
      </SignedIn>
    </>
  );
};

export default UserActions;
