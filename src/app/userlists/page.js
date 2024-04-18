import Link from "next/link";
import getUser from "../../../services/getUser";
const page = async () => {
  const getUserList = await getUser();
  return (
    <div className="text-center items-center">
      <h2 className="font-semibold text-4xl">User-list</h2>
      {getUserList.map((user) => (
        <h2 className="font-semibold text-2xl" key={user.id}>
          <Link href={`/userlists/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
};

export default page;
