import DashboardLayout from "@/Layout/Dashboard/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow w-full">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h1>
        <p className="mt-4 text-gray-600">
          This is the home page of your dashboard. You can add widgets, charts, or any other content here.
        </p>
      </div>
    </DashboardLayout>
  );
}