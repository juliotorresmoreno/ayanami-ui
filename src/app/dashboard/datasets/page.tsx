import DashboardLayout from "@/Layout/Dashboard/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="w-full">
        <h1>Datasets</h1>
        <p>Here you can view and manage your datasets.</p>
      </div>
    </DashboardLayout>
  );
}