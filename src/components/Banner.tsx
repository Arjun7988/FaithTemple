import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import ReactPlayer from 'react-player';

const slides = [
  {
    id: 1,
    type: 'video',
    title: "Welcome to Faith Temple",
    description: "Experience the love of Christ in our community",
    url: "https://www.youtube.com/watch?v=ZNV6PfqyQKE",
    button: {
      text: "Subscribe",
      link: "https://www.youtube.com/@FaithTempleIndia"
    }
  },
  {
    id: 2,
    type: 'image',
    title: "Sunday Worship Service",
    description: "Join us every Sunday at 10:00 AM for worship and fellowship",
    image: "https://lctech.in/faithtemple-images/img31.jpg"
  },
  {
    id: 3,
    type: 'image',
    title: "Community Outreach",
    description: "Serving our community with God's love",
    image: "https://lctech.in/faithtemple-images/img33.jpg"
  },
  {
    id: 4,
    type: 'image',
    title: "Fellowship & Prayer",
    description: "Growing together in faith and unity",
    image: "https://lctech.in/faithtemple-images/img25.jpeg"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id: number) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between items-center px-4 md:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 flex items-center justify-center transition-all duration-300 shadow-lg group"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 flex items-center justify-center transition-all duration-300 shadow-lg group"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'video' ? (
            <div className="absolute inset-0">
              <ReactPlayer
                url={slides[currentSlide].url}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                config={{
                  youtube: {
                    playerVars: { showinfo: 0, controls: 0, modestbranding: 1 }
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70">
                <div className="container mx-auto px-6 h-full flex items-center justify-center">
                  <div className="max-w-4xl text-center">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="inline-block text-red-500 font-semibold text-lg md:text-xl mb-4"
                    >
                      Faith Temple
                    </motion.span>
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                      {slides[currentSlide].title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    {slides[currentSlide].button && (
                      <motion.a
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        href={slides[currentSlide].button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 text-lg rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {slides[currentSlide].button.text}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-gray-200 dark:bg-navy-700 animate-pulse">
                {!loadedImages[currentSlide] && !failedImages[currentSlide] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-navy-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
              {failedImages[currentSlide] ? (
                <div className="absolute inset-0 bg-gray-200 dark:bg-navy-700 flex flex-col items-center justify-center">
                  <ImageOff className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-xl text-gray-500">Image not available</p>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 6 }}
                  className="w-full h-full"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    onLoad={() => handleImageLoad(currentSlide)}
                    onError={() => handleImageError(currentSlide)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      loadedImages[currentSlide] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70">
                <div className="container mx-auto px-6 h-full flex items-center justify-center">
                  <div className="max-w-4xl text-center">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="inline-block text-red-500 font-semibold text-lg md:text-xl mb-4"
                    >
                      Faith Temple
                    </motion.span>
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                      {slides[currentSlide].title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-red-500' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;