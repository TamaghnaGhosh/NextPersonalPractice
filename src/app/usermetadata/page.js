export default function page() {
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">User Page</h1>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "User Page",
    description: "User Page description",
  };
}
