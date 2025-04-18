import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Check, ArrowRight, Share2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project data with themed placeholder images
const projects = [
  {
    id: 1,
    title: "Children's Education Program",
    location: "São Paulo, Brazil",
    duration: "6 weeks",
    sdg: "Quality Education",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "📚",
      color: "bg-blue-500"
    },
    description: "Teach English to underprivileged children and support after-school programs.",
    tags: ["Teaching", "Community Work", "SDG 4"]
  },
  {
    id: 2,
    title: "Reforestation Project",
    location: "Chiang Mai, Thailand",
    duration: "8 weeks",
    sdg: "Climate Action",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "🌳",
      color: "bg-green-500"
    },
    description: "Join efforts to restore forest ecosystems through planting and conservation.",
    tags: ["Environment", "Nature", "SDG 13"]
  },
  {
    id: 3,
    title: "Tech Skills Workshop",
    location: "Cairo, Egypt",
    duration: "6 weeks",
    sdg: "Decent Work",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "💻",
      color: "bg-purple-500"
    },
    description: "Teach digital literacy and coding basics to youth from local communities.",
    tags: ["Technology", "Education", "SDG 8"]
  },
  {
    id: 4,
    title: "Healthcare Awareness",
    location: "Nairobi, Kenya",
    duration: "7 weeks",
    sdg: "Good Health",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "🩺",
      color: "bg-red-500"
    },
    description: "Conduct health education workshops in rural communities.",
    tags: ["Healthcare", "Community Work", "SDG 3"]
  },
  {
    id: 5,
    title: "Sustainable Agriculture",
    location: "Hanoi, Vietnam",
    duration: "8 weeks",
    sdg: "Zero Hunger",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "🌾",
      color: "bg-yellow-500"
    },
    description: "Work with local farmers to implement sustainable farming techniques.",
    tags: ["Agriculture", "Sustainability", "SDG 2"]
  },
  {
    id: 6,
    title: "Women's Empowerment",
    location: "Bogotá, Colombia",
    duration: "6 weeks",
    sdg: "Gender Equality",
    image: "/api/placeholder/600/400",
    imageOverlay: {
      icon: "✊",
      color: "bg-pink-500"
    },
    description: "Lead workshops on entrepreneurship and career development for young women.",
    tags: ["Empowerment", "Education", "SDG 5"]
  },
];

function Projects() {
  const [view, setView] = useState('swipe'); // 'swipe' or 'results'
  const [swipedProjects, setSwipedProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [matchedProjects, setMatchedProjects] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState(null);
  const [showFullCard, setShowFullCard] = useState(true);
  const constraintsRef = useRef(null);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {...prev, seconds: prev.seconds - 1};
        } else if (prev.minutes > 0) {
          return {...prev, minutes: prev.minutes - 1, seconds: 59};
        } else if (prev.hours > 0) {
          return {...prev, hours: prev.hours - 1, minutes: 59, seconds: 59};
        } else if (prev.days > 0) {
          return {...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59};
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSwipe = (direction) => {
    setDirection(direction);
    setAnimate(true);
    setShowFullCard(false);
    
    const liked = direction === 'right';
    
    setSwipedProjects([...swipedProjects, {
      projectId: projects[currentProject].id,
      liked
    }]);
    
    setTimeout(() => {
      setAnimate(false);
      setShowFullCard(true);
      if (currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1);
      } else {
        // Finish swiping
        const matches = projects.filter((project, index) => 
          swipedProjects[index]?.liked || false
        ).slice(0, 3);
        
        setMatchedProjects(matches);
        setView('results');
      }
    }, 500);
  };

  const resetSwipe = () => {
    setCurrentProject(0);
    setSwipedProjects([]);
    setView('swipe');
  };

  // Stack effect for upcoming cards
  const renderStackedCards = () => {
    const nextProjects = [];
    for (let i = 1; i <= 2; i++) {
      if (currentProject + i < projects.length) {
        nextProjects.push(projects[currentProject + i]);
      }
    }

    return nextProjects.map((project, index) => (
      <div 
        key={project.id}
        className="absolute top-0 left-0 right-0" 
        style={{
          zIndex: -index - 1,
          transform: `translateY(${(index + 1) * 10}px) scale(${1 - (index + 1) * 0.05})`,
          opacity: 0.7 - index * 0.3,
        }}
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative">
            <div className={`w-full h-64 ${project.imageOverlay.color} bg-opacity-20 flex items-center justify-center`}>
              <span className="text-6xl">{project.imageOverlay.icon}</span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderView = () => {
    if (view === 'swipe') {
      // If all projects have been swiped
      if (currentProject >= projects.length) {
        return (
          <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Finding your perfect matches...</h2>
              <div className="loader"></div>
            </div>
          </div>
        );
      }
      
      const project = projects[currentProject];
      
      return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 px-4">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Find Your Perfect Match</h2>
          <p className="text-gray-600 mb-8 text-center">Swipe right on projects you like, left on those you don't</p>
          
          <div className="relative w-full max-w-sm h-96" ref={constraintsRef}>
            {/* Stacked background cards for depth effect */}
            {showFullCard && renderStackedCards()}
            
            <motion.div
              className="absolute top-0 left-0 right-0"
              animate={
                animate 
                  ? { 
                      x: direction === 'left' ? -500 : 500, 
                      opacity: 0,
                      rotate: direction === 'left' ? -20 : 20,
                      scale: 0.8
                    }
                  : { x: 0, opacity: 1, rotate: 0, scale: 1 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -100) {
                  handleSwipe('left');
                } else if (offset.x > 100) {
                  handleSwipe('right');
                }
              }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <div className={`w-full h-64 ${project.imageOverlay.color} bg-opacity-20 flex items-center justify-center relative overflow-hidden`}>
                    {/* Main background color/image */}
                    <div className={`absolute inset-0 ${project.imageOverlay.color} bg-opacity-20`}></div>
                    
                    {/* Visual elements */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div key={i} className="border border-gray-200 border-opacity-30"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <span className="text-7xl relative z-10">{project.imageOverlay.icon}</span>
                    
                    {/* Floating shapes for visual interest */}
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white bg-opacity-10 animate-float-slow"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-white bg-opacity-10 animate-float-medium"></div>
                    <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-white bg-opacity-10 animate-float-fast"></div>
                    
                    {/* SDG badge */}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-xs px-2 py-1 rounded-full shadow-md">
                      <span className={`font-bold text-${project.imageOverlay.color.split('-')[1]}-600`}>{project.sdg}</span>
                    </div>
                    
                    {/* Location overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <span className="text-white font-medium">{project.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center mb-3 text-gray-600">
                    <span className="mr-4">{project.location}</span>
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Swipe indicators */}
            {animate && direction === 'right' && (
              <div className="absolute top-6 right-6 bg-green-500 text-white p-2 rounded-full shadow-lg z-20 transform rotate-12">
                <Check size={32} />
              </div>
            )}
            {animate && direction === 'left' && (
              <div className="absolute top-6 left-6 bg-red-500 text-white p-2 rounded-full shadow-lg z-20 transform -rotate-12">
                <X size={32} />
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-8 gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSwipe('left')}
              className="bg-white text-red-500 p-4 rounded-full shadow-md"
            >
              <X size={24} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSwipe('right')}
              className="bg-white text-green-500 p-4 rounded-full shadow-md"
            >
              <Check size={24} />
            </motion.button>
          </div>
          
          <div className="mt-8 text-center text-gray-500">
            <span className="font-bold text-blue-600">{currentProject + 1}</span> of {projects.length} projects
          </div>
        </div>
      );
    } else if (view === 'results') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">We Found Your Perfect Matches!</h2>
            <p className="text-center mb-12">Based on your preferences, these projects would be perfect for you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {matchedProjects.length > 0 ? (
                matchedProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg text-gray-800"
                  >
                    <div className={`h-40 ${project.imageOverlay.color} bg-opacity-20 relative flex items-center justify-center`}>
                      <span className="text-4xl">{project.imageOverlay.icon}</span>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                        <span className="text-white text-sm font-medium">{project.location}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                      <div className="flex items-center mb-2 text-gray-600 text-sm">
                        <span className="mr-3">{project.location}</span>
                        <span>{project.duration}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {project.sdg}
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p>No matches found. Try swiping on more projects!</p>
                  <button
                    onClick={resetSwipe}
                    className="mt-4 bg-white text-blue-600 font-bold py-2 px-6 rounded-full"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm mb-12">
              <h3 className="text-xl font-bold mb-4 text-center">Ready to take the next step?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full flex items-center justify-center"
                >
                  Book a 1:1 with an AIESECer <ArrowRight className="ml-2" size={16} />
                </motion.button>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
                  >
                    Learn more about AIESEC in IIT <ArrowRight className="ml-2" size={16} />
                  </motion.button>
                </Link>
              </div>
            </div>
            
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>Applications close in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 text-sm font-bold py-1 px-3 rounded-full flex items-center"
              >
                <Share2 size={16} className="mr-1" /> Share
              </motion.button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="font-sans">
      {renderView()}
      <style jsx global>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid white;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 3.5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Projects;