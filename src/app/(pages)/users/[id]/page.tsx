// app/users/[id]/page.tsx

import { fetchUserWithPosts } from "@/utils/api";
import { UserWithPosts } from "@/types";
import UserDetails from "@/components/UserDetail";

export const revalidate = 60;

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user: UserWithPosts = await fetchUserWithPosts(
    Number((await params).id)
  );
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <UserDetails user={user} />
    </div>
  );
}
