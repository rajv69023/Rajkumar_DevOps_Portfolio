import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Netflix Clone with EKS & DevSecOps",
      description: "Designed and deployed a Netflix-style streaming web application with backend microservices using Amazon EKS for container orchestration. Integrated comprehensive DevSecOps practices including vulnerability scanning, secrets management, and policy enforcement.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Scalable microservices architecture on Amazon EKS",
        "DevSecOps integration with Trivy, Aqua, and OPA",
        "GitOps workflows with GitHub Actions and ArgoCD",
        "Production-ready infrastructure with CI/CD and IaC"
      ],
      tags: ["EKS", "DevSecOps", "ArgoCD", "GitHub Actions", "Trivy"]
    },
    {
      title: "Infrastructure Provisioning with Terraform",
      description: "Comprehensive Infrastructure as Code (IaC) implementation using Terraform to provision and manage over 40 AWS resources including EC2, VPC, ELB, Auto Scaling, RDS, and more. Demonstrates scalable, repeatable infrastructure deployment patterns.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      resources: [
        { name: "EC2 Instances", icon: "fas fa-server", color: "text-blue-500" },
        { name: "VPC & Subnets", icon: "fas fa-network-wired", color: "text-green-500" },
        { name: "Load Balancers", icon: "fas fa-balance-scale", color: "text-purple-500" },
        { name: "Auto Scaling", icon: "fas fa-chart-line", color: "text-orange-500" },
        { name: "RDS Databases", icon: "fas fa-database", color: "text-red-500" },
        { name: "Security Groups", icon: "fas fa-shield-alt", color: "text-teal-500" }
      ],
      tags: ["Terraform", "AWS", "IaC", "Automation"]
    },
    {
      title: "CI/CD Pipeline for Java Spring Boot",
      description: "Complete CI/CD pipeline implementation using GitHub, Jenkins, Docker, and Jenkinsfile. Automated application containerization and deployment to remote servers for testing and production environments.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stages: [
        "Source code checkout from GitHub",
        "Build and test Java Spring Boot application",
        "Docker containerization and image creation",
        "Automated deployment to remote servers"
      ],
      tags: ["Jenkins", "Docker", "Spring Boot", "GitHub"]
    },
    {
      title: "E-Commerce Microservices on GKE",
      description: "Developed a comprehensive microservices-based e-commerce backend using multiple programming languages and deployed on Google Kubernetes Engine (GKE) for enhanced scalability and fault tolerance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      services: [
        { name: "User Management Service", icon: "fas fa-user", color: "text-blue-500" },
        { name: "Product Catalog Service", icon: "fas fa-box", color: "text-green-500" },
        { name: "Shopping Cart Service", icon: "fas fa-shopping-cart", color: "text-purple-500" },
        { name: "Payment Processing", icon: "fas fa-credit-card", color: "text-orange-500" },
        { name: "Order Management", icon: "fas fa-truck", color: "text-red-500" },
        { name: "Notification Service", icon: "fas fa-bell", color: "text-teal-500" }
      ],
      tags: ["GKE", "Microservices", "Multi-language", "Kubernetes"]
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing real-world DevOps and cloud infrastructure projects with modern technologies
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card rounded-2xl shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {project.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.resources && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">AWS Resources Managed:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      {project.resources.map((resource, idx) => (
                        <div key={idx} className="flex items-center">
                          <i className={`${resource.icon} ${resource.color} mr-2`}></i>
                          {resource.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.stages && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Pipeline Stages:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      {project.stages.map((stage, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-xs">{idx + 1}</span>
                          </div>
                          {stage}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.services && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Microservices Architecture:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <i className={`${service.icon} ${service.color} mr-2`}></i>
                          {service.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    <i className="fab fa-github mr-2"></i>
                    View Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {index === 0 ? "Live Demo" : index === 1 ? "Documentation" : index === 2 ? "Demo" : "Architecture"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
