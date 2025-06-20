import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen hero-bg text-white relative overflow-hidden">
      <div className="floating-shapes">
        <div className="shape w-32 h-32 bg-blue-500 rounded-full"></div>
        <div className="shape w-24 h-24 bg-purple-500 rounded-full"></div>
        <div className="shape w-20 h-20 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Raj Kumar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-300">
                DevOps & Cloud Engineer
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Passionate about automation, cloud infrastructure, and modern DevOps practices. 
                Experienced with AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <i className="fas fa-code mr-2"></i>
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Get In Touch
                </motion.a>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                <motion.a
                  href="https://www.linkedin.com/in/rajkumar-techie/"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
                <motion.a
                  href="mailto:rajv69023@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <i className="fas fa-envelope"></i>
                </motion.a>
                <motion.a
                  href="tel:+918607996993"
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <i className="fas fa-phone"></i>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="card-3d relative">
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="/attached_assets/WhatsApp Image 2025-06-20 at 7.56.49 AM_1750386636301.jpeg"
                  alt="Raj Kumar - DevOps Engineer"
                  className="w-80 h-80 rounded-full border-8 border-white shadow-2xl object-cover"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                >
                  <i className="fas fa-cloud text-white text-2xl"></i>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                >
                  <i className="fab fa-docker text-white text-xl"></i>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
