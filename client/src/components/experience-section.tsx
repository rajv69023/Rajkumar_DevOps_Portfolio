import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services, 2024",
      icon: "fab fa-aws",
      color: "from-orange-400 to-orange-600"
    },

    {
      name: "Python for complete beginner",
      issuer: "Udemy, 2025",
      icon: "fab fa-python",
      color: "from-orange-400 to-yellow-600"
  },
    
    {
      name: "Cloud & DevOps Internship Certificate",
      issuer: "CloudDevOpsHub, 2025",
      icon: "fas fa-cloud",
      color: "from-blue-400 to-blue-600"
    },

    {
      name: "Multi-Cloud with AWS + DevOps + AI",
      issuer: "CloudDevOpsHub, 2025",
      icon: "fas fa-graduation-cap",
      color: "from-purple-400 to-purple-600"
    },

    {
      name: "Professional Certificate in DevOps",
      issuer: "MTF Institute of Management, Technology and Finance, 2025",
      icon: "fas fa-infinity",
      color: "from-blue-500 to-green-500"
    }

    
  ];


return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey, academic background, and continuous learning in cloud and DevOps technologies
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
            <div className="relative">
              <div className="timeline-item pl-12 pb-12">
                <div className="timeline-dot"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="project-card p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">Cloud & DevOps Intern</h4>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Feb 2025 - Apr 2025</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-gray-800">CloudDevOpsHub, Indore, India</p>
                    <p className="text-gray-600">Mentored by Vikas Yadav, Founder</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Participated in hands-on internship covering Cloud and DevOps with AI integration",
                      "Worked on real-time projects using AWS, Azure, GCP, Docker, Jenkins, Kubernetes, Terraform",
                      "Applied best practices in IaC, cloud provisioning, monitoring, and deployment automation",
                      "Collaborated within an Agile team using Git, GitHub, and Jira for version control and task management"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <i className="fas fa-arrow-right text-blue-500 mr-2 mt-1"></i>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education & Certifications</h3>
            <div className="space-y-6">
              {/* Current Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="project-card p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Bachelor of Computer Applications (BCA)</h4>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">5th Semester</span>
                </div>
                <p className="text-gray-800 font-medium mb-2">Bhagwati Institute of Technology and Science, Ghaziabad</p>
                <p className="text-gray-600">2023 - 2026</p>
              </motion.div>
              
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="project-card p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">Professional Certifications</h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mr-4`}>
                        <i className={`${cert.icon} text-white text-xl`}></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{cert.name}</p>
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Academic History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="project-card p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">Academic Background</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900">Class XII - New Haryana Sr. Sec. School</p>
                      <p className="text-gray-600 text-sm">2023</p>
                    </div>
                    <span className="font-semibold text-blue-600">55%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium text-gray-900">Class X - ST Ram Tirath High School</p>
                      <p className="text-gray-600 text-sm">2021</p>
                    </div>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
