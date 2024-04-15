import Link from "next/link";

export default function StudentList() {
  const students = ["Roni", "Rahul", "Tupu", "Nata"];
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">StudentList</h1>
      <ul>
        {students?.map((element, i) => (
          <li key={element}>
            <Link href={`/studentlist/${element}`}>{element}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Go to main page</Link>
    </div>
  );
}
