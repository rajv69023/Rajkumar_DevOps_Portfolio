import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen hero-bg text-white relative overflow-hidden">
      {/* Enhanced Floating Particles Background */}
      <div className="floating-shapes">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0
          }}
          className="shape w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)'
          }}
        />
        <motion.div 
          animate={{ 
            y: [0, -60, 0],
            x: [0, -40, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="shape w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full opacity-25"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 35px rgba(168, 85, 247, 0.4)'
          }}
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 25, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="shape w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full opacity-20"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)'
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            x: [0, -30, 0],
            rotate: [0, 270, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="shape w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-full opacity-15"
          style={{
            top: '70%',
            left: '80%',
            filter: 'blur(2px)',
            boxShadow: '0 0 25px rgba(251, 146, 60, 0.3)'
          }}
        />
        <motion.div 
          animate={{ 
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, -90, -180],
            scale: [1, 1.25, 1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="shape w-28 h-28 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full opacity-18"
          style={{
            top: '30%',
            right: '85%',
            filter: 'blur(1.5px)',
            boxShadow: '0 0 32px rgba(99, 102, 241, 0.3)'
          }}
        />
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
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="hero-3d relative">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative transform-gpu"
                >
                  <motion.img
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    src="/attached_assets/WhatsApp Image 2025-06-20 at 7.56.49 AM_1750386636301.jpeg"
                    alt="Raj Kumar - DevOps Engineer"
                    className="w-80 h-80 rounded-full border-8 border-white shadow-2xl object-cover"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                  
                  {/* Floating Tech Icons with 3D Effects */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                      y: [0, -15, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center floating-icon"
                    style={{
                      boxShadow: '0 15px 35px rgba(34, 197, 94, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <i className="fas fa-cloud text-white text-2xl"></i>
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, -360],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{ 
                      y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center floating-icon"
                    style={{
                      boxShadow: '0 15px 35px rgba(168, 85, 247, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <i className="fab fa-docker text-white text-xl"></i>
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      x: [0, 20, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center floating-icon"
                    style={{
                      boxShadow: '0 12px 30px rgba(251, 146, 60, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <i className="fab fa-aws text-white text-lg"></i>
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      x: [0, -20, 0],
                      y: [0, -10, 0],
                      rotate: [0, -180, -360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center floating-icon"
                    style={{
                      boxShadow: '0 12px 30px rgba(59, 130, 246, 0.4)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <i className="fas fa-dharmachakra text-white text-sm"></i>
                  </motion.div>
                </motion.div>
                
                {/* Glowing Ring Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0 w-80 h-80 rounded-full border-4 border-blue-400"
                  style={{
                    filter: 'blur(2px)',
                    transformStyle: 'preserve-3d'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
