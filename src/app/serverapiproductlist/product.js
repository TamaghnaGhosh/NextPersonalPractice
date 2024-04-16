"use client";
export default function Product({ price }) {
  return (
    <div>
      <button
        className="bg-slate-500 rounded-md text-white w-24 h-10"
        onClick={() => alert(price)}
      >
        Click Me
      </button>
    </div>
  );
}
