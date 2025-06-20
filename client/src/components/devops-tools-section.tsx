import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DevOpsToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toolCategories = [
    {
      category: "Version Control & Collaboration",
      icon: "fas fa-code-branch",
      color: "from-orange-500 to-red-500",
      tools: [
        { name: "Git", icon: "fab fa-git-alt", description: "Distributed version control system", color: "from-orange-400 to-red-500" },
        { name: "GitHub", icon: "fab fa-github", description: "Web-based Git repository hosting", color: "from-gray-700 to-black" },
        { name: "GitLab", icon: "fab fa-gitlab", description: "DevOps platform with Git repos", color: "from-orange-500 to-orange-600" },
        { name: "Bitbucket", icon: "fab fa-bitbucket", description: "Git repository management", color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      category: "Containerization & Orchestration",
      icon: "fab fa-docker",
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Docker", icon: "fab fa-docker", description: "Container platform for applications", color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", icon: "fas fa-dharmachakra", description: "Container orchestration platform", color: "from-blue-500 to-purple-600" },
        { name: "Podman", icon: "fas fa-cube", description: "Daemonless container engine", color: "from-purple-500 to-pink-500" },
        { name: "OpenShift", icon: "fas fa-layer-group", description: "Enterprise Kubernetes platform", color: "from-red-500 to-red-600" }
      ]
    },
    {
      category: "CI/CD & Automation",
      icon: "fas fa-cogs",
      color: "from-green-500 to-teal-500",
      tools: [
        { name: "Jenkins", icon: "fas fa-hammer", description: "Open source automation server", color: "from-blue-600 to-blue-700" },
        { name: "GitLab CI", icon: "fab fa-gitlab", description: "Built-in CI/CD with GitLab", color: "from-orange-500 to-orange-600" },
        { name: "GitHub Actions", icon: "fab fa-github", description: "Workflow automation by GitHub", color: "from-gray-700 to-gray-800" },
        { name: "Tekton", icon: "fas fa-rocket", description: "Cloud-native CI/CD framework", color: "from-blue-500 to-indigo-600" }
      ]
    },
    {
      category: "Infrastructure as Code",
      icon: "fas fa-server",
      color: "from-purple-500 to-indigo-500",
      tools: [
        { name: "Terraform", icon: "fas fa-layer-group", description: "Infrastructure automation tool", color: "from-purple-500 to-purple-600" },
        { name: "Ansible", icon: "fas fa-cog", description: "Configuration management tool", color: "from-red-500 to-red-600" },
        { name: "Pulumi", icon: "fas fa-cloud", description: "Modern infrastructure as code", color: "from-purple-400 to-blue-500" },
        { name: "CloudFormation", icon: "fab fa-aws", description: "AWS infrastructure templates", color: "from-orange-400 to-orange-500" }
      ]
    },
    {
      category: "Monitoring & Observability",
      icon: "fas fa-chart-line",
      color: "from-yellow-500 to-orange-500",
      tools: [
        { name: "Prometheus", icon: "fas fa-fire", description: "Monitoring and alerting toolkit", color: "from-orange-500 to-red-500" },
        { name: "Grafana", icon: "fas fa-chart-area", description: "Analytics and monitoring platform", color: "from-orange-400 to-orange-600" },
        { name: "ELK Stack", icon: "fas fa-search", description: "Elasticsearch, Logstash, Kibana", color: "from-yellow-400 to-yellow-600" },
        { name: "Jaeger", icon: "fas fa-route", description: "Distributed tracing system", color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      category: "Security & Compliance",
      icon: "fas fa-shield-alt",
      color: "from-red-500 to-pink-500",
      tools: [
        { name: "OpenSCAP", icon: "fas fa-shield-check", description: "Security compliance scanning", color: "from-red-500 to-red-600" },
        { name: "Falco", icon: "fas fa-eye", description: "Runtime security monitoring", color: "from-blue-500 to-blue-600" },
        { name: "Clair", icon: "fas fa-bug", description: "Container vulnerability scanner", color: "from-green-500 to-green-600" },
        { name: "OWASP ZAP", icon: "fas fa-lock", description: "Web application security scanner", color: "from-purple-500 to-purple-600" }
      ]
    }
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: "fab fa-aws", description: "Amazon Web Services", color: "from-orange-400 to-orange-600" },
    { name: "Azure", icon: "fab fa-microsoft", description: "Microsoft Azure", color: "from-blue-500 to-blue-600" },
    { name: "GCP", icon: "fab fa-google", description: "Google Cloud Platform", color: "from-blue-400 to-green-500" },
    { name: "OpenStack", icon: "fas fa-cloud", description: "Open source cloud platform", color: "from-red-500 to-red-600" }
  ];

  return (
    <section id="devops-tools" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps & Cloud Tools Arsenal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive toolkit of open-source tools and cloud platforms used daily in modern DevOps practices
          </p>
        </motion.div>

        {/* Cloud Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cloud Platforms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateX: 15,
                  rotateY: 15,
                  rotateZ: 5,
                  transition: { duration: 0.3 }
                }}
                className={`project-card p-6 rounded-2xl shadow-lg bg-gradient-to-br ${platform.color} cursor-pointer relative overflow-hidden`}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 text-center text-white">
                  <motion.i 
                    className={`${platform.icon} text-4xl mb-3 block`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <h4 className="text-lg font-bold mb-2">{platform.name}</h4>
                  <p className="text-sm opacity-90">{platform.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps Tools Categories */}
        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              className="project-card p-8 rounded-2xl shadow-lg bg-white relative overflow-hidden"
            >
              <motion.div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.2 }}
              />
              
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + categoryIndex * 0.2 + toolIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 15,
                      rotateX: 10,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} cursor-pointer relative group`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 text-center text-white">
                      <motion.i 
                        className={`${tool.icon} text-3xl mb-2 block`}
                        whileHover={{ 
                          rotate: [0, 20, -20, 0],
                          scale: 1.3
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      <h4 className="text-sm font-bold mb-1">{tool.name}</h4>
                      <p className="text-xs opacity-90 leading-tight">{tool.description}</p>
                    </div>
                    
                    {/* 3D Floating Effect */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: toolIndex * 0.2
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="project-card p-8 rounded-2xl shadow-lg bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i className="fas fa-heart text-2xl"></i>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Open Source Powered</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              All tools featured are open-source and free to use, demonstrating the power of community-driven 
              development in modern DevOps practices. These tools form the backbone of enterprise-grade infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsToolsSection;