import { motion } from 'framer-motion';
import { InstagramIcon, Linkedin, LinkedinIcon, LucideGithub, MessageCircleMore, WheatIcon } from 'lucide-react';
import { useState } from 'react';
import { FaInstagram, FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 border-2 py-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  Ahmedabad, Gujarat, India
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="mr-2">📧</span>
                  tejanimanan444@gmail.com
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="mr-2">📱</span>
                  +91 9898666545
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect With Me</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/manan-tejani-4258a224a/"
                  target='_blank'
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >

                  <LinkedinIcon className='text-blue-700' />
                </a>
                <a
                  href="https://github.com/tejanimanan/"
                  target='_blank'
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >

                  <LucideGithub className='text-black' />
                </a>
                <a
                  href="https://www.instagram.com/man._.patel_/"
                  target='_blank'
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  
                  <FaInstagram className="w-6 h-6 text-red-600"></FaInstagram>
                </a>
                 <a
                  href="https://wa.link/utdqyi"
                  target='_blank'
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 