import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    { title: "Taxation", icon: "📝", description: "Whether you are a start-up business or established company...", link : "taxation" },
    { title: "Accounting", icon: "🖥️", description: "Having accurate up-to-date accounting...", link : "accounting" },
    { title: "Business Advisory", icon: "💼", description: "Preparation of financial statements...", link : "business"  },
    { title: "Services Overview", icon: "🔧", description: "Personal tax returns from $88, please...", link : "services"},
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
                <a href={service.link} className="text-blue-600 hover:underline mt-4 inline-block">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}