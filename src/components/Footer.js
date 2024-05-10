const Footer = () => {
  return (
    <div className="footer mt-2 pt-3 flex flex-col justify-center items-center text-white bg-neutral-500">
      <div className="py-12">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8 
      text-center sm:text-left lg:text-left   "
        >
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 text-justify">About Us</h2>
            <p className="mb-4">
              ਸਵਿਗੀ is a Food Ordering Platform, which makes you choose the best
              food from your favourite restaurant.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/grocery"
                  className="hover:text-white transition-colors duration-300"
                >
                  Grocery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>New Delhi, India</p>
            <p>Delhi 10001</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          © 2024 ਸਵਿਗੀ. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
