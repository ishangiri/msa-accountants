import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Taxation() {
  // Taxation services data
  const taxationServices = [
    {
      title: "Tax Planning and Advice",
      description:
        "Strategic tax planning to minimize your tax liability while ensuring compliance with all regulations.",
      icon: "📝",
    },
    {
      title: "Business Activity Statements",
      description:
        "Preparation and lodgment of BAS to keep your business compliant with tax obligations.",
      icon: "📊",
    },
    {
      title: "Fringe Benefits Tax Returns",
      description:
        "Expert assistance in preparing and filing FBT returns for your business.",
      icon: "💼",
    },
    {
      title: "Preparation of Financial Statements",
      description:
        "Accurate and timely preparation of financial statements for tax purposes.",
      icon: "📈",
    },
    {
      title: "Business Income Tax Returns",
      description:
        "Comprehensive preparation of business income tax returns to ensure accuracy.",
      icon: "🏢",
    },
    {
      title: "Personal Income Tax Returns",
      description:
        "Personal tax returns starting from $88, tailored to your individual needs.",
      icon: "👤",
    },
    {
      title: "Calculation and Determination of Capital Gains Tax",
      description:
        "Expert guidance on calculating and managing Capital Gains Tax for your assets.",
      icon: "💰",
    },
    {
      title: "Asset Protection Strategies",
      description:
        "Protect your assets with tailored strategies to minimize tax risks.",
      icon: "🛡️",
    },
    {
      title: "Partnerships and Trust Structures",
      description:
        "Specialized tax advice for partnerships and trust structures to optimize tax outcomes.",
      icon: "🤝",
    },
    {
      title: "Strategic Business Planning and Budgeting",
      description:
        "Incorporate tax strategies into your business planning and budgeting for better financial outcomes.",
      icon: "📅",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Taxation Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            MSA Accountants are highly experienced in preparing all types of tax returns, profit and loss forms, and statements, while focusing on proactive strategies to minimize tax.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Taxation Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Taxation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxationServices.map((service, index) => (
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
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Taxes?</h2>
          <p className="text-lg mb-8">
            Let MSA Accountants help you with expert taxation services tailored to your needs.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}