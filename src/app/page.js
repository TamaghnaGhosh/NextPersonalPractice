import HomePage from "./HomePage/page";
export default function Home() {
  return (
    <main className="flex min-h-10 flex-col items-center justify-between">
      <h1 className="text-6xl">Home page</h1>
      <HomePage />
    </main>
  );
}
