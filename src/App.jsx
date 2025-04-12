import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, X, Check, ArrowRight, Share2, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Children's Education Program",
    location: "São Paulo, Brazil",
    duration: "6 weeks",
    sdg: "Quality Education",
    image: "/api/placeholder/600/400",
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
    description: "Lead workshops on entrepreneurship and career development for young women.",
    tags: ["Empowerment", "Education", "SDG 5"]
  },
];

function App() {
  const [section, setSection] = useState('landing');
  const [swipedProjects, setSwipedProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [matchedProjects, setMatchedProjects] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState(null);
  const constraintsRef = useRef(null);

  const handleSwipe = (direction) => {
    setDirection(direction);
    setAnimate(true);
    
    const liked = direction === 'right';
    
    setSwipedProjects([...swipedProjects, {
      projectId: projects[currentProject].id,
      liked
    }]);
    
    setTimeout(() => {
      setAnimate(false);
      if (currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1);
      } else {
        // Finish swiping
        const matches = swipedProjects
          .filter(p => p.liked)
          .map(p => projects.find(proj => proj.id === p.projectId))
          .slice(0, 3);
        
        setMatchedProjects(matches);
        setSection('results');
      }
    }, 300);
  };

  const navigateTo = (sectionName) => {
    setSection(sectionName);
    window.scrollTo(0, 0);
  };

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

  const renderSection = () => {
    switch(section) {
      case 'landing':
        return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your perfect volunteering match</h1>
              <p className="text-xl mb-8">Discover life-changing projects abroad that match your interests</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('about')}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full flex items-center"
            >
              Start Matching <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        );
        
      case 'about':
        return (
          <div className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-blue-600">What is AIESEC?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                  <p className="text-gray-700 mb-3">AIESEC is the world's largest youth-run organization present in 126+ countries and territories.</p>
                  <div className="text-3xl font-bold text-blue-600">126+</div>
                  <div className="text-sm text-gray-500">Countries & Territories</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-blue-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">Youth Empowerment</h3>
                  <p className="text-gray-700 mb-3">We empower young people through cross-cultural exchanges and leadership opportunities.</p>
                  <div className="text-3xl font-bold text-blue-600">40K+</div>
                  <div className="text-sm text-gray-500">Volunteers Yearly</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-blue-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                  <p className="text-gray-700 mb-3">Creating positive change through leadership development experiences aligned with UN SDGs.</p>
                  <div className="text-3xl font-bold text-blue-600">70+</div>
                  <div className="text-sm text-gray-500">Years of Experience</div>
                </motion.div>
              </div>
              
              <h2 className="text-3xl font-bold mb-8 text-blue-600">What is Global Volunteer?</h2>
              
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Live abroad, volunteer with purpose, grow as a leader</h3>
                    <p className="text-gray-700 mb-6">
                      Global Volunteer is AIESEC's cross-cultural volunteering experience. Work on projects 
                      addressing the UN Sustainable Development Goals while developing leadership skills 
                      and making a positive impact.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white bg-opacity-70 p-3 rounded">
                        <div className="font-bold text-blue-600">4-8 weeks</div>
                        <div className="text-sm">Program Duration</div>
                      </div>
                      <div className="bg-white bg-opacity-70 p-3 rounded">
                        <div className="font-bold text-blue-600">17 SDGs</div>
                        <div className="text-sm">UN Goals Addressed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/api/placeholder/500/300" 
                      alt="Global Volunteer" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateTo('swipe')}
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center mx-auto"
                >
                  Find Your Match <ChevronRight className="ml-2" />
                </motion.button>
              </div>
            </div>
          </div>
        );
        
      case 'swipe':
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
            
            <div className="relative w-full max-w-sm" ref={constraintsRef}>
              <motion.div
                className="absolute top-0 left-0 right-0"
                animate={
                  animate 
                    ? { 
                        x: direction === 'left' ? -500 : 500, 
                        opacity: 0,
                        rotate: direction === 'left' ? -20 : 20
                      }
                    : { x: 0, opacity: 1, rotate: 0 }
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
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {project.sdg}
                      </span>
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
        
      case 'results':
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
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-40 object-cover"
                      />
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
                      onClick={() => { 
                        setCurrentProject(0);
                        setSwipedProjects([]);
                        navigateTo('swipe');
                      }}
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
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
                    onClick={() => navigateTo('about-iit')}
                  >
                    Learn more about AIESEC in IIT <ArrowRight className="ml-2" size={16} />
                  </motion.button>
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
        
      case 'about-iit':
        return (
          <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">Why AIESEC in IIT?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-bold mb-4">We're not just a global org. We're a community right here.</h3>
                  <p className="text-gray-700 mb-6">
                    AIESEC in IIT is one of the most active chapters in the country. Our members are passionate
                    about creating impact, developing leadership, and helping fellow students access global opportunities.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold mb-2">What our members say:</h4>
                    <p className="italic text-gray-700">
                      "Joining AIESEC was the best decision I made in college. It completely transformed my 
                      perspective and gave me friends from around the world."
                    </p>
                    <p className="text-right text-sm text-gray-500 mt-2">— Aditya, 3rd Year</p>
                  </div>
                  <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
                    Join our community
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <img src="/api/placeholder/300/200" alt="AIESEC Team" className="rounded-lg shadow-sm" />
                  <img src="/api/placeholder/300/200" alt="AIESEC Event" className="rounded-lg shadow-sm" />
                  <img src="/api/placeholder/300/200" alt="AIESEC Workshop" className="rounded-lg shadow-sm" />
                  <img src="/api/placeholder/300/200" alt="AIESEC Conference" className="rounded-lg shadow-sm" />
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-blue-600 font-semibold mb-1">April 15, 2025</div>
                    <h4 className="font-bold mb-1">Info Session: Global Volunteer</h4>
                    <p className="text-gray-700 text-sm">Learn all about our volunteering opportunities abroad.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-blue-600 font-semibold mb-1">April 22, 2025</div>
                    <h4 className="font-bold mb-1">Workshop: Cross-Cultural Communication</h4>
                    <p className="text-gray-700 text-sm">Essential skills for global experiences.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => navigateTo('landing')}
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="font-sans">
      {renderSection()}
      
      {/* Sticky chat button */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center"
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden md:inline">Chat with us</span>
        </motion.button>
      </div>
      
      {/* Global styles */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
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
      `}</style>
    </div>
  );
}

export default App;