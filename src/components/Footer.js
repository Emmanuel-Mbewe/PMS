const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mb-4 md:mb-0">
            <a href="/" className="text-white hover:text-gray-700">Home</a>
            <a href="pastors" className="text-white hover:text-gray-700">Pastors</a>
            <a href="churches" className="text-white hover:text-gray-700">Churches</a>
            <a href="contact" className="text-white hover:text-gray-700">Contact</a>
            <a href="about" className="text-white hover:text-gray-700">About</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-4">
          {/* Address Section */}
          <div className="mb-4 md:mb-0 md:w-1/3">
            <h4 className="text-lg font-semibold">PMS</h4>
            <p className="text-gray-400">Know Your Pastor</p>
            <p className="text-gray-400">Address: 123 Church St, Lilongwe, Malawi</p>
            <p className="text-gray-400">Email: info@ccapnkhomasynod.org</p>
          </div>

          {/* Location Section */}
          <div className="mb-4 md:mb-0 md:w-1/3">
            <p className="text-gray-400">Headquarters: Nkhoma, Malawi</p>
          </div>

          {/* President Section */}
          <div className="mb-4 md:mb-0 md:w-1/3">
            <p className="text-gray-400">President: Rev. John Banda</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {/* Social Media Section */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} PMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;