import { UserActions, DropdownUser } from "@app/components/UserAccount";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const UserAccount = () => {
  const [isClient, setIsClient] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLoaded, signOut, getToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !target.closest(".modal-content")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isClient && isLoaded) {
      const fetchToken = async () => {
        try {
          const token = await getToken();
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      };
      fetchToken();
    }
  }, [isClient, isLoaded, getToken]);

  if (!isClient || !isLoaded) return null;

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="relative ml-6 mt-21 cursor-pointer z-50" ref={dropdownRef}>
      <UserActions toggleDropdown={toggleDropdown} />
      <DropdownUser dropdownOpen={dropdownOpen} handleSignOut={handleSignOut} />
    </div>
  );
};

export default UserAccount;
