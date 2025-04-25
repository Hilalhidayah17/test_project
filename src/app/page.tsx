import UserTable from "@/components/UserTable";

import { fetchUsers } from "@/utils/api";
import { User } from "@/types";

export default async function Home() {
  const users: User[] = await fetchUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        User Dashboard
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <UserTable initialUsers={users} />
      </div>
    </div>
  );
}
