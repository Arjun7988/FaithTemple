import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Clock } from 'lucide-react';

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    description: "The Four biblical mandates: Worship, Fellowship, Discipleship, and Evangelism. We are committed to living out these mandates as we serve God and our community."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Our vision is a community of disciples, transformed by the Gospel, renewed in His Word, and walking boldly in God’s love and truth."
  },
  {
    icon: Clock,
    title: "Service Times",
    description: "Come and join us every Sunday from 10 AM to 12 PM for a heartfelt time of worship, warm fellowship, and spiritual growth. Be encouraged through vibrant worship, inspiring testimonies, and thoughtful Bible teachings as we grow together in faith."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-navy-900 dark:text-white">About Faith Temple</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Growing together in faith and fellowship</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-navy-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-maroon-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white text-center">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;