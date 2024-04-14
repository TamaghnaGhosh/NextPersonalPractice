import HomePage from "./HomePage/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl">Home page</h1>
      <HomePage />
    </main>
  );
}
