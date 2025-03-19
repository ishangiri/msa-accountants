import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Company() {
  // Data for "What Sets Us Apart" section
  const uniquePoints = [
    {
      title: "Same Day Service",
      description:
        "We know your time is valuable. MSA Accountants offer same-day service within 24 hours of contacting us.",
      icon: "⏰",
    },
    {
      title: "Upfront Costs",
      description:
        "We provide an upfront fixed cost so there are no hidden fees or extra charges for our services.",
      icon: "💸",
    },
    {
      title: "Practical Taxation and Accounting Advice",
      description:
        "You come to us for practical taxation, accounting, or business advice, giving you peace of mind.",
      icon: "📋",
    },
    {
      title: "One Stop Business and Taxation Services",
      description:
        "Access the complete service across all areas of taxation, accounting, business advisory, and asset protection.",
      icon: "🏢",
    },
    {
      title: "Personalized Accounting Service",
      description:
        "No two clients or their circumstances are the same. We tailor our services to your specific needs.",
      icon: "👤",
    },
    {
      title: "Jargon-Free Accounting and Tax Advice",
      description:
        "We explain everything in plain, simple English, so you can walk away understanding what was discussed.",
      icon: "💬",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About MSA Accountants</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We provide a wealth of experience in taxation, asset protection, accounting, and business advisory services to educate and empower people.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-4">
              MSA Accountants are the personal, professional, and complete accounting, taxation, and business service for singles, families, small to medium businesses, and investors throughout Queensland.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We pride ourselves on delivering specific solutions suited to each of our client’s specific needs. MSA Accountants offer a worry-free, obligation-free service best suited to your needs and requirements.
            </p>
            <p className="text-lg text-gray-600">
              MSA Accountants are not like other accounting or taxation firms you may have used before. For expert, honest, professional, and fixed-priced services for your taxation, business advisory, and accounting needs, contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniquePoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{point.icon}</span>
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-lg mb-8">
            Contact MSA Accountants for expert taxation, accounting, and business advisory services tailored to your needs.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}