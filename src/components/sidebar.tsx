import Link from 'next/link';

export function LeftSidebar() {
  const publicAccessLinks = ['Individuals', 'Superannuation', 'Non-Profit Organisations', 'Rates & Calculators', 'Tax Planning', 'Forms & Services', 'Tax Topics Explained'];

  return (
    <aside className="w-64 p-4 bg-gray-100">
      <h3 className="font-bold mb-2">Public Access</h3>
      <ul className="space-y-1">
        {publicAccessLinks.map((link) => (
          <li key={link}>
            <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/client-access" className="text-blue-600 hover:underline">
          Client Access
        </Link>
      </div>
    </aside>
  );
}

export function RightSidebar() {
  const news = ['Selling a subdivided land', 'The income requirement for non-commercial losses', 'repayments of study and training support loan'];
  const contact = ['Varying PAYG instalments', 'Timing of the CGT event'];

  return (
    <aside className="w-64 p-4 bg-gray-100">
      <div>
        <h3 className="font-bold mb-2">Latest News</h3>
        <ul className="space-y-1">
          {news.map((item) => (
            <li key={item} className="text-green-600">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Contact Us</h3>
        <ul className="space-y-1">
          {contact.map((item) => (
            <li key={item} className="text-green-600">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}