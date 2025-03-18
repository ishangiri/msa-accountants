import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function News() {
  const newsItems = [
    "Selling a subdivided land",
    "The income requirement for non-commercial losses",
    "Country-by-country repayments of study and training support loan",
    "Varying PAYG instalments",
    "Timing for the CGT event",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {newsItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  <a href="#" className="hover:text-blue-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}