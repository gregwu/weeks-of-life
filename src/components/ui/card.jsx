import React from "react";

export function Card({ children }) {
  return <div className="p-4 shadow-lg rounded-lg border">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
