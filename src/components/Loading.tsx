// components/Loading.tsx
import { RotateCw } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <RotateCw className="w-12 h-12 text-gray-600 animate-spin" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
