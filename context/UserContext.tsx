"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchUser } from "@/lib/api";
import { User } from "@/types";

interface UserContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user"); // Check if user is stored
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const data = await fetchUser();
      setUser(data);
      sessionStorage.setItem("user", JSON.stringify(data)); // Cache user data
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
