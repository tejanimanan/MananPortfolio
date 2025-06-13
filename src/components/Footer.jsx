const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Manan Tejani</h3>
            <p className="text-gray-400 text-justify">
              A dedicated and detail-oriented React Developer with a strong passion for building responsive, high-performance web applications using modern technologies like React.js, Tailwind CSS, and Node.js. <br></br>I specialize in creating clean, user-friendly interfaces and love transforming ideas into scalable, real-world solutions.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/manan-tejani-4258a224a/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tejanimanan/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/man._.patel_/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                instagram
              </a>
              <a
                href="https://wa.link/utdqyi"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manan Tejani. Crafted with ❤️ using React.js. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 