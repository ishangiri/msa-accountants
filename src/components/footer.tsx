export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">MSA Accountants</h3>
            <p className="mt-2">07 3345 8761</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Disclaimer</a>
          </div>
        </div>
      </footer>
    );
  }