import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Share2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project data
const projects = [
  {
    id: 1,
    title: "Children's Education Program",
    location: "São Paulo, Brazil",
    duration: "6 weeks",
    sdg: "Quality Education",
    image: "/api/placeholder/600/400",
    icon: "📚",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
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
    icon: "🌳",
    color: "bg-green-100",
    iconColor: "text-green-500",
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
    icon: "💻",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
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
    icon: "🩺",
    color: "bg-red-100",
    iconColor: "text-red-500",
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
    icon: "🌾",
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
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
    icon: "✊",
    color: "bg-pink-100",
    iconColor: "text-pink-500",
    description: "Lead workshops on entrepreneurship and career development for young women.",
    tags: ["Empowerment", "Education", "SDG 5"]
  },
];

// Amenities data for the second slideshow
const amenities = [
  {
    id: 1,
    name: "Public Transport",
    icon: "🚌",
    color: "bg-blue-900"
  },
  {
    id: 2,
    name: "Wi-Fi",
    icon: "📶",
    color: "bg-blue-900"
  },
  {
    id: 3,
    name: "Common Kitchen",
    icon: "🍳",
    color: "bg-blue-900"
  },
  {
    id: 4,
    name: "24/7 Access",
    icon: "🔑",
    color: "bg-blue-900"
  },
  {
    id: 5,
    name: "Clean Bathrooms",
    icon: "🚿",
    color: "bg-blue-900"
  },
  {
    id: 6,
    name: "Study Area",
    icon: "📚",
    color: "bg-blue-900"
  },
  {
    id: 7,
    name: "Laundry",
    icon: "🧺",
    color: "bg-blue-900"
  },
  {
    id: 8,
    name: "Security",
    icon: "🔒",
    color: "bg-blue-900"
  }
];

function Projects() {
  const [view, setView] = useState('swipe'); // 'swipe' or 'results'
  const [swipedProjects, setSwipedProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [matchedProjects, setMatchedProjects] = useState([]);
  const [currentAmenity, setCurrentAmenity] = useState(2); // Start with Wi-Fi selected
  
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

  const handleSwipe = (isLiked) => {
    setSwipedProjects([...swipedProjects, {
      projectId: projects[currentProject].id,
      liked: isLiked
    }]);
    
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
  };

  const resetSwipe = () => {
    setCurrentProject(0);
    setSwipedProjects([]);
    setView('swipe');
  };

  const renderIndicators = (total, current) => {
    return (
      <div className="flex justify-center gap-1 mt-6">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-blue-500" : "w-2 bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  const renderSwipeView = () => {
    const project = projects[currentProject];
    
    return (
      <div className="flex flex-col items-center min-h-screen bg-white py-8 px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Find Your Perfect Match</h2>
        <p className="text-gray-600 mb-8 text-center">Swipe right on projects you like, left on those you don't</p>
        
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <div className={`w-full h-48 ${project.color} flex items-center justify-center`}>
              <div className={`${project.iconColor} text-6xl`}>{project.icon}</div>
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs">
                {project.sdg}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
              <p className="text-white">{project.location}</p>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-gray-500">{project.duration}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 gap-16">
          <button
            onClick={() => handleSwipe(false)}
            className="bg-white border border-gray-300 text-red-500 p-4 rounded-full shadow-md hover:shadow-lg focus:outline-none"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={() => handleSwipe(true)}
            className="bg-white border border-gray-300 text-green-500 p-4 rounded-full shadow-md hover:shadow-lg focus:outline-none"
          >
            <Check size={24} />
          </button>
        </div>
        
        <div className="mt-8 mb-4 text-center text-gray-500">
          <span className="font-bold text-blue-600">{currentProject + 1}</span> of {projects.length} projects
        </div>
        
        {renderIndicators(projects.length, currentProject)}
      </div>
    );
  };

  const renderResultsView = () => {
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
                  <div className={`h-40 ${project.color} flex items-center justify-center relative`}>
                    <div className={`${project.iconColor} text-4xl`}>{project.icon}</div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white text-sm">{project.location}</p>
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
              <button
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full flex items-center justify-center"
              >
                Book a 1:1 with an AIESECer <ArrowRight className="ml-2" size={16} />
              </button>
              
              <Link to="/contact">
                <button
                  className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
                >
                  Learn more about AIESEC in IIT <ArrowRight className="ml-2" size={16} />
                </button>
              </Link>
            </div>
          </div>
          
          <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              <span>Applications close in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </div>
            <button
              className="bg-white text-blue-600 text-sm font-bold py-1 px-3 rounded-full flex items-center"
            >
              <Share2 size={16} className="mr-1" /> Share
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAmenitiesSlideshow = () => {
    return (
      <div className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Common Amenities</h2>
          
          <div className="relative">
            <div className="flex justify-center gap-4 overflow-x-auto pb-6 no-scrollbar">
              {amenities.map((amenity, index) => (
                <div 
                  key={amenity.id}
                  className={`flex-shrink-0 p-6 rounded-lg min-w-48 ${
                    index === currentAmenity ? "bg-blue-800" : "bg-blue-900"
                  } flex flex-col items-center justify-center cursor-pointer transition-all`}
                  onClick={() => setCurrentAmenity(index)}
                >
                  <div className="text-3xl mb-3">{amenity.icon}</div>
                  <p className={index === currentAmenity ? "text-white" : "text-blue-300"}>
                    {amenity.name}
                  </p>
                  {index === currentAmenity && (
                    <div className="w-full h-1 bg-blue-400 mt-4 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {renderIndicators(amenities.length, currentAmenity)}
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans">
      {view === 'swipe' ? renderSwipeView() : renderResultsView()}
      {renderAmenitiesSlideshow()}
    </div>
  );
}

export default Projects;