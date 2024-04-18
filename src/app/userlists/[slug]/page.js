import getUser from "../../../../services/getUser";

export default async function Student({ params }) {
  const getUserList = await getUser();
  const getUserObj = getUserList[params.slug - 1];
  console.log("🚀🚀🚀🚀🚀🚀🚀:", getUserList[params.slug - 1]);
  return (
    <div className="items-center text-center">
      <h2 className="font-semibold text-4xl">
        User Details Page= {params.slug}
      </h2>
      <h2 className="font-semibold text-4xl"> {getUserObj.name}</h2>
      <h2 className="font-semibold text-4xl"> {getUserObj.username}</h2>
      <h2 className="font-semibold text-4xl"> {getUserObj.phone}</h2>
      <h2 className="font-semibold text-4xl"> {getUserObj.website}</h2>
      <h2 className="font-semibold text-4xl"> {getUserObj.email}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserList = await getUser();
  return getUserList.map((user) => ({
    slug: user.id.toString(),
  }));
}
