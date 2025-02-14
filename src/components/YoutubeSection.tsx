import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const videos = [
  {
    id: "video1",
    url: "https://www.youtube.com/embed/ZNV6PfqyQKE"
  },
  {
    id: "video2",
    url: "https://www.youtube.com/embed/YBwlbT9Q5Es"
  },
  {
    id: "video3",
    url: "https://www.youtube.com/embed/qpy5zQ4opB8"
  }
];

const YoutubeSection = () => {
  return (
    <section id="youtube" className="py-20 bg-navy-50 dark:bg-navy-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white">Featured Videos</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  src={video.url}
                  title={`Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/channel/UCutf60DPKVLQRDhAl-wNXKg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-navy-600 to-maroon-600 text-white hover:opacity-90 transition-opacity"
          >
            View Channel
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;