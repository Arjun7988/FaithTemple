import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

// Featured images at the start of the array
const galleryImages = [
  {
    id: 26,
    src: "https://lctech.in/faithtemple-images/img26.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 27,
    src: "https://lctech.in/faithtemple-images/img27.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 28,
    src: "https://lctech.in/faithtemple-images/img28.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 29,
    src: "https://lctech.in/faithtemple-images/img29.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 30,
    src: "https://lctech.in/faithtemple-images/img30.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 31,
    src: "https://lctech.in/faithtemple-images/img31.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 32,
    src: "https://lctech.in/faithtemple-images/img32.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 33,
    src: "https://lctech.in/faithtemple-images/img33.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 4,
    src: "https://lctech.in/faithtemple-images/img4.jpg",
    category: "Church Events",
    title: "Prayer Meeting"
  },
  {
    id: 5,
    src: "https://lctech.in/faithtemple-images/img5.jpg",
    category: "Church Events",
    title: "Fellowship"
  },
  {
    id: 9,
    src: "https://lctech.in/faithtemple-images/img9.jpg",
    category: "Church Events",
    title: "Worship Gathering"
  },
  {
    id: 16,
    src: "https://lctech.in/faithtemple-images/img16.jpg",
    category: "Church Events",
    title: "Community Service"
  },
  {
    id: 18,
    src: "https://lctech.in/faithtemple-images/img18.jpg",
    category: "Church Events",
    title: "Worship Service"
  },
  {
    id: 21,
    src: "https://lctech.in/faithtemple-images/img21.jpg",
    category: "Church Events",
    title: "Special Service"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [loadedImages, setLoadedImages] = React.useState<Record<number, boolean>>({});
  const [failedImages, setFailedImages] = React.useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id: number) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-navy-800 dark:to-navy-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-900 dark:text-white">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Capturing moments of worship, fellowship, and community in our church family
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow
                ${index < 3 ? 'lg:col-span-2 row-span-2' : ''}`}
            >
              <div className="group aspect-[4/3] relative">
                {!loadedImages[image.id] && !failedImages[image.id] && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-navy-700 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-navy-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                
                {failedImages[image.id] ? (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-navy-700 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                    <ImageOff className="w-8 h-8 mb-2" />
                    <p className="text-sm">Image not available</p>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.title}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out ${
                      loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}
                
                {loadedImages[image.id] && !failedImages[image.id] && (
                  <button
                    onClick={() => setSelectedImage(image.id)}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={handlePrevImage}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={handleNextImage}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl w-full mx-auto">
              {failedImages[selectedImage] ? (
                <div className="w-full h-[85vh] bg-gray-200 dark:bg-navy-700 rounded-lg flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                  <ImageOff className="w-16 h-16 mb-4" />
                  <p className="text-xl">Image not available</p>
                </div>
              ) : (
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;