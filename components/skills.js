// components/SkillsPage.js
'use client';

import { motion } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiPython, SiGit, SiTailwindcss, 
  SiSass, SiFigma, SiRedux, SiJest,
  SiTensorflow, SiKeras, SiScikitlearn
} from 'react-icons/si';
import { FaServer, FaMobileAlt, FaDatabase, FaCodeBranch } from 'react-icons/fa';

const skillsData = [
  {
    category: "Frontend",
    icon: <FaMobileAlt className="text-2xl text-[#ff3f81]" />,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, proficiency: "Intermediate" },
      { name: "React", icon: <SiReact className="text-cyan-500" />, proficiency: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, proficiency: "Expert" },
    ]
  },
  {
    category: "Backend",
    icon: <FaServer className="text-2xl text-[#ff3f81]" />,
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, proficiency: "Advanced" },
      { name: "Express", icon: <SiExpress className="text-gray-300" />, proficiency: "Interediate" },
      { name: "Python", icon: <SiPython className="text-blue-400" />, proficiency: "Advanced" }
    ]
  },
  {
    category: "Machine Learning",
    icon: <FaDatabase className="text-2xl text-[#ff3f81]" />,
    technologies: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" />, proficiency: "Basic" },
      { name: "Keras", icon: <SiKeras className="text-red-500" />, proficiency: "Basic" },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-blue-500" />, proficiency: "Basic" },
      { name: "Pandas", icon: <SiPython className="text-blue-600" />, proficiency: "Advanced" },
      { name: "NumPy", icon: <SiPython className="text-green-500" />, proficiency: "Advanced" }
    ]
  },
  {
    category: "Tools & Other",
    icon: <FaCodeBranch className="text-2xl text-[#ff3f81]" />,
    technologies: [
      { name: "Git", icon: <SiGit className="text-orange-600" />, proficiency: "Expert" },
      { name: "Figma", icon: <SiFigma className="text-purple-500" />, proficiency: "Intermediate" }
    ]
  }
];

const proficiencyLevels = {
  "Basic": "40%",
  "Intermediate": "70%",
  "Advanced": "85%",
  "Expert": "95%"
};

const proficiencyColors = {
  "Basic": "from-gray-400 to-gray-500",
  "Intermediate": "from-blue-400 to-blue-600",
  "Advanced": "from-purple-400 to-purple-600",
  "Expert": "from-[#ff3f81] to-pink-600"
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl rounded-xl relative">
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20" />
        
        {/* Main Content */}
        <div className="relative z-10 p-6 md:p-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-[#ff3f81]">Skills</span> & <span className="text-[#ff3f81]">Technologies</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Here's a comprehensive overview of the technologies I work with and my proficiency levels in each area.
            </p>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 backdrop-blur-sm hover:border-[#ff3f81]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      whileHover={{ scale: 1.03 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <div className="text-2xl">
                          {tech.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-white font-medium group-hover:text-[#ff3f81] transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-xs text-white/60">{tech.proficiency}</p>
                        </div>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden ml-9">
                        <div 
                          className={`h-full bg-gradient-to-r ${proficiencyColors[tech.proficiency]} rounded-full`}
                          style={{ width: proficiencyLevels[tech.proficiency] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Proficiency Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 bg-white/5 rounded-xl border border-white/10 p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-4 text-center">Proficiency Levels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(proficiencyLevels).map(([level, width], index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${level === "Basic" ? "bg-gray-400" : level === "Intermediate" ? "bg-blue-500" : level === "Advanced" ? "bg-purple-500" : "bg-[#ff3f81]"}`} />
                  <span className="text-white/80 text-sm">{level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Floating Tech Icons Animation */}
        <motion.div 
          className="absolute top-1/4 left-1/4 text-5xl opacity-10"
          animate={{
            rotate: 360,
            x: [0, 20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <SiReact className="text-cyan-500" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 text-5xl opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <SiJavascript className="text-yellow-400" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/6 text-4xl opacity-10"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        >
          <SiTensorflow className="text-orange-500" />
        </motion.div>
      </div>
    </div>
  );
}