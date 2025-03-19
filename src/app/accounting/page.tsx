import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Accounting() {
  // Accounting services data
  const accountingServices = [
    {
      title: "Financial Statement Preparation",
      description:
        "Accurate preparation of financial statements on a regular basis, tailored to your business needs.",
      icon: "📊",
    },
    {
      title: "Profit and Loss Reporting",
      description:
        "Detailed profit and loss reports to help you understand your business’s financial health.",
      icon: "📈",
    },
    {
      title: "Balance Sheet Preparation",
      description:
        "Comprehensive balance sheets to provide a clear snapshot of your financial position.",
      icon: "📋",
    },
    {
      title: "Cash Flow Management",
      description:
        "Effective cash flow management to ensure your business maintains liquidity.",
      icon: "💸",
    },
    {
      title: "Budgeting and Forecasting",
      description:
        "Strategic budgeting and forecasting to help you plan for future growth.",
      icon: "📅",
    },
    {
      title: "Payroll Services",
      description:
        "Streamlined payroll services to ensure your employees are paid accurately and on time.",
      icon: "👥",
    },
    {
      title: "Bookkeeping Services",
      description:
        "Reliable bookkeeping to keep your financial records organized and up-to-date.",
      icon: "📚",
    },
    {
      title: "Financial Reporting for Investors",
      description:
        "Professional financial reporting to meet the needs of investors and stakeholders.",
      icon: "📉",
    },
    {
      title: "Board of Directors Reporting",
      description:
        "Tailored financial reports for board meetings to support decision-making.",
      icon: "🏢",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Accounting Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Having accurate, up-to-date accounting and financial statements is crucial to reaching your financial and business goals. MSA Accountants make accounting easy for you.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Accounting Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Accounting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Accounting?</h2>
          <p className="text-lg mb-8">
            Let MSA Accountants handle your accounting needs with precision and expertise.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}