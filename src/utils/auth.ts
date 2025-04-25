// for generating token

import axios from "axios";
import { toast } from "react-toastify";

export const generateToken = async (username: string, password: string) => {
  const res = await axios.post("/api/auth/login", {
    username,
    password,
  });

  if (!res.data.success) {
    toast.error("Invalid credentials");
    throw new Error("Invalid credentials");
  }

  return res.data;
};
