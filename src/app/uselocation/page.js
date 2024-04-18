"use client"
import Script from "next/script";

export default function page() {
  return (
    <div className="items-center text-center">
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("loaction loaded");
        }}
      />
      <h1 className="font-semibold text-4xl">User Location</h1>
    </div>
  );
}
