'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-teal-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">MSA Accountants</span>
          <div className="w-6 h-6 bg-white rounded-full"></div> {/* Placeholder for logo */}
        </div>
        <div className="flex space-x-6">
          {['Home', 'Solutions', 'Company', 'Services', 'Taxation', 'Business Advisory', 'Join Us'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Input type="text" placeholder="Search..." className="w-40" />
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}