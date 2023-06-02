"use client";

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("Test");
      }}
    >
      Test
    </button>
  );
}
