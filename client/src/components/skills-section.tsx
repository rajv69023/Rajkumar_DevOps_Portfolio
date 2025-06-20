import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      category: "Linux Skills",
      description: "Troubleshooting, Linux administration, monitoring systems, managing services, file and software/package management, understanding the Linux boot process",
      level: 90,
      icon: "fab fa-linux",
      color: "from-gray-500 to-gray-700",
      items: ["System Administration", "Process Management", "Package Management", "Boot Process", "File Systems", "Network Configuration"]
    },
    {
      category: "Programming & Scripting",
      description: "Python development and Shell scripting for automation and DevOps workflows",
      level: 85,
      icon: "fab fa-python",
      color: "from-blue-500 to-yellow-500",
      items: ["Python", "Bash/Shell Scripting", "Automation Scripts", "Infrastructure Automation"]
    },
    {
      category: "Cloud Platforms",
      description: "AWS, Google Cloud Platform (GCP), Microsoft Azure with hands-on experience",
      level: 95,
      icon: "fas fa-cloud",
      color: "from-blue-400 to-purple-600",
      items: ["AWS (Primary)", "Google Cloud Platform", "Microsoft Azure", "Multi-Cloud Architecture"]
    },
    {
      category: "Containerization & Orchestration",
      description: "Docker containerization and Kubernetes orchestration on GKE, EKS platforms",
      level: 88,
      icon: "fab fa-docker",
      color: "from-blue-500 to-cyan-500",
      items: ["Docker", "Kubernetes", "Google GKE", "Amazon EKS", "Container Registry"]
    },
    {
      category: "Infrastructure as Code (IaC)",
      description: "Terraform for automated infrastructure provisioning and management",
      level: 92,
      icon: "fas fa-cube",
      color: "from-purple-500 to-pink-500",
      items: ["Terraform", "Infrastructure Automation", "State Management", "Resource Provisioning"]
    },
    {
      category: "CI/CD Tools",
      description: "Git & GitHub version control, Jenkins automation, and continuous integration/deployment",
      level: 90,
      icon: "fas fa-code-branch",
      color: "from-green-500 to-teal-500",
      items: ["Git & GitHub", "Jenkins", "CI/CD Pipelines", "Automated Testing", "Deployment Automation"]
    },
    {
      category: "Monitoring & Logging",
      description: "Prometheus metrics collection, Grafana dashboards, and CloudWatch monitoring",
      level: 85,
      icon: "fas fa-chart-line",
      color: "from-orange-500 to-red-500",
      items: ["Prometheus", "Grafana", "CloudWatch", "Log Analysis", "Performance Monitoring"]
    },
    {
      category: "AI Interest Areas",
      description: "Cloud-based AI tools and automation integration for modern DevOps workflows",
      level: 80,
      icon: "fas fa-robot",
      color: "from-indigo-500 to-purple-500",
      items: ["Cloud AI Services", "Automation Integration", "ML Operations", "AI-Powered Monitoring"]
    },
    {
      category: "Networking",
      description: "VPC configuration, Load Balancing, DNS management, and TCP/IP networking",
      level: 88,
      icon: "fas fa-network-wired",
      color: "from-cyan-500 to-blue-500",
      items: ["VPC", "Load Balancing", "DNS", "TCP/IP", "Network Security", "Firewall Configuration"]
    }
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
        
        <div className="space-y-8">
          {/* Detailed Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card p-6 rounded-2xl shadow-lg skill-card-3d"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-full flex items-center justify-center mr-4`}>
                    <i className={`${skillGroup.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{skillGroup.category}</h4>
                    <div className="flex items-center mt-1">
                      <div className="bg-gray-200 rounded-full h-2 flex-1 mr-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skillGroup.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          className={`bg-gradient-to-r ${skillGroup.color} h-2 rounded-full`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-600">{skillGroup.level}%</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {skillGroup.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2">Key Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + itemIndex * 0.05 }}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="project-card p-8 rounded-2xl shadow-lg skill-card-3d"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              Soft Skills & Professional Attributes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Strong problem-solving abilities, collaborative mindset, and extensive experience working in Agile environments with modern development tools and methodologies.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { skill: "Problem Solving", icon: "fas fa-lightbulb", color: "from-yellow-400 to-orange-500" },
                { skill: "Team Collaboration", icon: "fas fa-handshake", color: "from-blue-400 to-blue-600" },
                { skill: "Agile Methodology", icon: "fas fa-sync-alt", color: "from-green-400 to-green-600" },
                { skill: "Technical Communication", icon: "fas fa-comments", color: "from-purple-400 to-purple-600" }
              ].map((softSkill, index) => (
                <motion.div
                  key={softSkill.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${softSkill.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <i className={`${softSkill.icon} text-white`}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-800">{softSkill.skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
