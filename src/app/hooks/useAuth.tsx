"use client";

import { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const useAuthClient = () => {
  const { isLoaded, userId, sessionId, signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoaded && userId) {
      setIsAuthenticated(true);
    } else if (isLoaded && !userId) {
      setIsAuthenticated(false);
    }
  }, [isLoaded, userId]);

  const redirectToLogin = () => {
    router.push("/sign-in");
  };

  const redirectToDashboard = () => {
    router.push("/dashboard");
  };

  return {
    isAuthenticated,
    user,
    signOut,
    redirectToLogin,
    redirectToDashboard,
  };
};
