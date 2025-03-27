"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchUser } from "@/lib/api";
import type { User } from "@/types";

interface UserContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    const getUser = async () => {
      try {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setLoading(false);
          return;
        }

        const data = await fetchUser();
        setUser(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

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

export default UserProvider;