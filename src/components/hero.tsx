import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MSA Accountants</h1>
        <p className="text-xl mb-8">
          Complete Solution for Accounting, Taxation & Business Advisory Services
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Get Started
        </Button>
      </div>
    </section>
  );
}