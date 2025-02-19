import Link from "next/link";

export default function ChangePassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Change Password</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-lg text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Your Current Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-lg text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Your New Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-lg text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              placeholder="Confirm Your New Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Change Password
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}