// User type matching the API response
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Post type matching the API response
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Combined type for user with their posts
export interface UserWithPosts extends User {
  posts: Post[];
}

// Type for the table sorting
export type SortDirection = "asc" | "desc";
export type SortField = keyof Pick<User, "name" | "email" | "username">;

// Auth types
export interface AuthToken {
  token: string;
  expiresIn: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
