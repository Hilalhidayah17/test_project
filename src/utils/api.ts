import { User } from "@/types";
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch user
export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// fetch post Data
export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

// Update Data
export const updateUserData = async (id: number, data: Partial<User>) => {
  const response = await axios.patch(`${API_BASE_URL}/users/${id}`, data);
  return response.data;
};

// fetch user with posts
export const fetchUserWithPosts = async (userId: number | string) => {
  const [user, posts] = await Promise.all([
    axios.get(`${API_BASE_URL}/users/${userId}`),
    axios.get(`${API_BASE_URL}/posts?userId=${userId}`),
  ]);
  return {
    ...user.data,
    posts: posts.data,
  };
};
