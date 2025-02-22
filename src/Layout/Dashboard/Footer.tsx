export default function Footer() {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="container mx-auto px-6 py-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Dashboard. All rights reserved.
      </div>
    </footer>
  );
}