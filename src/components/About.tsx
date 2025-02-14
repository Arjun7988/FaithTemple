import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-navy-900 dark:text-white">About Faith Temple</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Faith Temple is a vibrant, Bible-believing church dedicated to the transformative power of the Gospel of Jesus Christ. We wholeheartedly embrace worship, fellowship, discipleship, and evangelism as the driving forces that not only transform lives but also forge a strong community of believers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
             Our church stands firmly on the foundation of God's Word, and we are committed to nurturing every individual's journey in their relationship with Christ. Through a variety of ministries and programs, we offer meaningful opportunities for spiritual growth, fellowship, and service.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us every Sunday at 10 AM for an uplifting experience filled with powerful worship, inspiring messages, and heartfelt fellowship. Whether you are a lifelong believer or embarking on your spiritual journey, you will find a warm and welcoming home at Faith Temple.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are proud to be led by Sridhar, our passionate teacher who holds a Master of Divinity in Christian Apologetics from Liberty University in Virginia, USA. He is fervently dedicated to reaching young and challenged groups, sharing the truth of Jesus and the Gospel with them. Alongside him is his wife, Ramya, who shares his passion for Church Ministry. Together, they are blessed with two wonderful boys, Yesasvi and Yeshmith, who inspire and enrich their lives and the community around them. Come and be a part of our transformative journey!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Church worship service"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;