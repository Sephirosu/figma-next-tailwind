import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import Button from "@app/components/Buttons/Button";
import { DropdownProps } from "./types";

const DropdownUser: React.FC<DropdownProps> = ({
  dropdownOpen,
  handleSignOut,
}) => {
  if (!dropdownOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg  ">
      <SignedOut>
        <div className="p-2  ">
          <SignInButton mode="modal">
            <Button className="block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="p-2">
          <Button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </Button>
        </div>
      </SignedIn>
    </div>
  );
};

export default DropdownUser;
