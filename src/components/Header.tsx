"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  console.log(pathname);

  const checkLogin = () => {
    if (pathname == "/login") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [isLoggedIn, pathname]);

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm dark:text-red-300 text-black">
      <div className="flex items-center justify-between  px-6 py-4">
        <div className="text-lg font-bold text-gray-800 dark:text-white hidden lg:inline">
          Dashboard
        </div>
        <div></div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isLoggedIn === null ? (
            <span className="text-gray-500 text-sm">Checking...</span>
          ) : isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
