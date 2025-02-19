import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto text-center">
        
        {/* Logo and description */}
        <h2 className="text-2xl font-bold text-white">Petra AI</h2>
        <p className="mt-2 text-sm max-w-md mx-auto">
          Transforming data into knowledge with artificial intelligence and vector databases.
        </p>

        {/* Navigation links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#features" className="hover:text-primary transition">Features</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-4 mt-6 invisible">
          <a href="https://facebook.com" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition">
            <FaFacebookF className="text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition">
            <FaLinkedinIn className="text-white" />
          </a>
          <a href="https://github.com" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition">
            <FaGithub className="text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500">© 2024 Petra AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
