import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "AWS Cloud Services", level: 95, icon: "fab fa-aws", color: "text-orange-500" },
    { name: "Docker & Containerization", level: 90, icon: "fab fa-docker", color: "text-blue-500" },
    { name: "Kubernetes Orchestration", level: 85, icon: "fas fa-dharmachakra", color: "text-blue-600" },
    { name: "Terraform IaC", level: 88, icon: "fas fa-cube", color: "text-purple-500" },
    { name: "CI/CD Pipelines", level: 92, icon: "fas fa-code-branch", color: "text-green-500" },
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: "fab fa-aws", color: "from-orange-50 to-orange-100 text-orange-500" },
    { name: "GCP", icon: "fab fa-google", color: "from-blue-50 to-blue-100 text-blue-500" },
    { name: "Azure", icon: "fab fa-microsoft", color: "from-blue-50 to-blue-100 text-blue-600" },
  ];

  const devopsTools = [
    { name: "Docker", icon: "fab fa-docker", color: "from-blue-50 to-blue-100 text-blue-500" },
    { name: "K8s", icon: "fas fa-dharmachakra", color: "from-blue-50 to-blue-100 text-blue-600" },
    { name: "Jenkins", icon: "fas fa-cog", color: "from-red-50 to-red-100 text-red-500" },
    { name: "Terraform", icon: "fas fa-cube", color: "from-purple-50 to-purple-100 text-purple-500" },
  ];

  const programming = [
    { name: "Python", icon: "fab fa-python", color: "from-yellow-50 to-yellow-100 text-yellow-600" },
    { name: "Shell Scripting", icon: "fas fa-terminal", color: "from-gray-50 to-gray-100 text-gray-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in modern DevOps tools, cloud platforms, and automation technologies
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="project-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 flex items-center">
                        <i className={`${skill.icon} ${skill.color} mr-2`}></i>
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="project-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Stack</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Cloud Platforms</h4>
                <div className="grid grid-cols-3 gap-4">
                  {cloudPlatforms.map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`text-center p-4 bg-gradient-to-br ${platform.color} rounded-lg cursor-pointer`}
                    >
                      <i className={`${platform.icon} text-3xl mb-2`}></i>
                      <p className="text-sm font-medium text-gray-700">{platform.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">DevOps Tools</h4>
                <div className="grid grid-cols-4 gap-3">
                  {devopsTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`text-center p-3 bg-gradient-to-br ${tool.color} rounded-lg cursor-pointer`}
                    >
                      <i className={`${tool.icon} text-2xl mb-2`}></i>
                      <p className="text-xs font-medium text-gray-700">{tool.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Programming & Scripting</h4>
                <div className="grid grid-cols-2 gap-4">
                  {programming.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`text-center p-4 bg-gradient-to-br ${lang.color} rounded-lg cursor-pointer`}
                    >
                      <i className={`${lang.icon} text-3xl mb-2`}></i>
                      <p className="text-sm font-medium text-gray-700">{lang.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
