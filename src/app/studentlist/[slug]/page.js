"use client";
export default function Student({ params }) {
  return (
    <div className="items-center text-center">
      <h1 className="font-semibold text-4xl">
        Student Details = {params.slug}
      </h1>
    </div>
  );
}
