// src/components/PostList.tsx
"use client";

import { Post } from "@/types";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
