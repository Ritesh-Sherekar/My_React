export default function NavBar() {
    return (
      <nav className="bg-slate-50 h-16 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold mr-10">
            <img src="Image\KekaLogoBlack.svg" alt="" />
        </div>
  
        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6">
            <li className="hover:text-gray-600 cursor-pointer">Product</li>
            <li className="hover:text-gray-600 cursor-pointer">Customer</li>
            <li className="hover:text-gray-600 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-600 cursor-pointer">About</li>
            <li className="hover:text-gray-600 cursor-pointer">Resource</li>
            <li className="hover:text-gray-600 cursor-pointer">Careers</li>
          </ul>
        </div>
  
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get Free Trial
          </button>
        </div>
      </nav>
    );
  }
  