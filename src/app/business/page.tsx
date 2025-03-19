import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BusinessAdvisory() {
  // Business Advisory services data
  const advisoryServices = [
    {
      title: "Strategies to Manage Growth",
      description:
        "Proven strategies to help your business scale effectively while maintaining profitability.",
      icon: "📈",
    },
    {
      title: "Salary Packaging",
      description:
        "Optimize your compensation structure with effective salary packaging solutions.",
      icon: "💼",
    },
    {
      title: "Cash Flow, Budgets, and Financial Projections",
      description:
        "Expert guidance on managing cash flow, creating budgets, and forecasting financial outcomes.",
      icon: "💸",
    },
    {
      title: "Business Benchmarking",
      description:
        "Compare your business performance against industry standards to identify growth opportunities.",
      icon: "📊",
    },
    {
      title: "Working Capital Management",
      description:
        "Strategies to optimize your working capital for improved financial stability.",
      icon: "🏢",
    },
    {
      title: "Business Plan Preparation",
      description:
        "Comprehensive business plans to guide your company’s growth and attract investors.",
      icon: "📋",
    },
    {
      title: "Strategic Planning",
      description:
        "Develop long-term strategies to achieve your business goals and objectives.",
      icon: "📅",
    },
    {
      title: "Management Consultation",
      description:
        "Expert consultation to improve management practices and operational efficiency.",
      icon: "🤝",
    },
    {
      title: "Improving Financial Outcomes",
      description:
        "Tailored advice to enhance your financial performance and profitability.",
      icon: "💰",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Business Advisory Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you are a startup business or have been in business for years, our Business Advisory Services deliver the professional support mechanisms you need to manage growth and optimize profitability.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Business Advisory Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Business Advisory Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8">
            Let MSA Accountants provide the business advisory support you need to succeed.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}