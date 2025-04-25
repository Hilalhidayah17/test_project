import { fetchUserWithPosts } from "@/utils/api";
import { UserWithPosts } from "@/types";
import UserDetails from "@/components/UserDetail";

export const revalidate = 60;

type PageProps = {
  params: {
    id: string;
  };
};

export default async function UserDetailPage({ params }: PageProps) {
  const user: UserWithPosts = await fetchUserWithPosts(Number(params.id));

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <UserDetails user={user} />
    </div>
  );
}
