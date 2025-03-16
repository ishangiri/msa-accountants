import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { LeftSidebar } from '@/components/sidebar';

export default function Home() {


  return (
    <div className="flex flex-col md:flex-row">
      <LeftSidebar />
      <div className="flex-1">
        <Navbar />
        <div className="container mx-auto py-10">
          <div className="flex justify-center mb-10">
            <div className="text-center">
              <img src="/featurebanner.jpg" alt="Welcome Banner" className="w-full h-48 object-cover" />
              <h1 className="text-3xl font-bold mt-4">Welcome to MSA Accountants</h1>
              <p className="mt-2">Complete solutions for accounting, taxation, and business advisory services.</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}