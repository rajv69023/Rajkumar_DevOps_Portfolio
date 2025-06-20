import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  rotationSpeed: number;
  rotation: number;
}

export default function ThreeDBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.6)',   // Blue
      'rgba(168, 85, 247, 0.6)',   // Purple
      'rgba(34, 197, 94, 0.6)',    // Green
      'rgba(251, 146, 60, 0.6)',   // Orange
      'rgba(239, 68, 68, 0.6)',    // Red
      'rgba(6, 182, 212, 0.6)',    // Cyan
    ];

    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 80 + 20,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotationSpeed: (Math.random() - 0.5) * 2,
        rotation: 0
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        rotation: particle.rotation + particle.rotationSpeed,
        // Bounce off edges
        speedX: particle.x <= 0 || particle.x >= window.innerWidth ? -particle.speedX : particle.speedX,
        speedY: particle.y <= 0 || particle.y >= window.innerHeight ? -particle.speedY : particle.speedY,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric Floating Shapes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: `linear-gradient(45deg, ${particle.color}, ${particle.color.replace('0.6', '0.3')})`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
          }}
          animate={{
            x: (mousePosition.x - particle.x) * 0.01,
            y: (mousePosition.y - particle.y) * 0.01,
            rotate: particle.rotation,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 20 },
            y: { type: "spring", stiffness: 50, damping: 20 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-20 text-4xl text-blue-400 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <i className="fab fa-aws"></i>
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-3xl text-purple-400 opacity-20"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <i className="fab fa-docker"></i>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-40 text-3xl text-green-400 opacity-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <i className="fas fa-dharmachakra"></i>
      </motion.div>

      <motion.div
        className="absolute top-60 left-1/2 text-4xl text-orange-400 opacity-20"
        animate={{
          y: [0, -35, 0],
          rotate: [0, 270],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <i className="fas fa-cloud"></i>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 text-3xl text-cyan-400 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <i className="fas fa-cube"></i>
      </motion.div>

      {/* Grid Lines Effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }}
      />
    </div>
  );
}