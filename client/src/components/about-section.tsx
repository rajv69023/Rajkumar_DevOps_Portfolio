import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A motivated and passionate fresher building a successful career in Cloud and DevOps Engineering
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="project-card p-8 rounded-2xl shadow-lg card-3d">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a motivated DevOps and Cloud Engineering enthusiast with a strong focus on automation, 
                AI integration, and modern DevOps tools. My hands-on experience spans across major cloud platforms 
                including AWS, GCP, and Azure, with expertise in containerization, orchestration, and infrastructure as code.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I continuously seek to enhance my knowledge and practical skills in emerging technologies. 
                Known for being a quick learner and hardworking individual, I'm always exploring new ways 
                to optimize development workflows and infrastructure management.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-cloud text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Expertise</h4>
                  <p className="text-gray-600 text-sm">AWS, GCP, Azure platforms with hands-on project experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-cogs text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">DevOps Tools</h4>
                  <p className="text-gray-600 text-sm">Docker, Kubernetes, Jenkins, Terraform, CI/CD automation</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="project-card p-8 rounded-2xl shadow-lg card-3d">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {[
                  "Hands-on experience with DevOps tools and infrastructure automation",
                  "Successfully built and deployed full-stack applications using CI/CD pipelines",
                  "Strong understanding of cloud-native architecture and Infrastructure as Code (IaC) principles",
                  "AWS Solutions Architect Associate certified with multi-cloud expertise"
                ].map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  Location
                </h4>
                <p className="text-gray-700">Haryana, Hisar, 125001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
