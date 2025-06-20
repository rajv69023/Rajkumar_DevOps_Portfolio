import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">Raj Kumar</h3>
          <p className="text-gray-400 mb-6">DevOps & Cloud Engineer | Building the future of infrastructure automation</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/rajkumar-techie/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="mailto:rajv69023@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
            <motion.a
              href="tel:+918607996993"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <i className="fas fa-phone"></i>
            </motion.a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">&copy; 2025 Raj Kumar. All rights reserved. Built with modern web technologies.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
