import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-600">MSA Accountants</h1>
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link href="/company" className="text-gray-600 hover:text-blue-600 transition">
            Company
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/join-us" className="text-gray-600 hover:text-blue-600 transition">
            Join Us
          </Link>
        </nav>
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          Contact Us
        </Button>
      </div>
    </header>
  );
}