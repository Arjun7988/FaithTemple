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
            <h2 className="text-4xl font-bold mb-6 text-navy-900 dark:text-white">Welcome to Faith Temple!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Faith Temple is a vibrant, Bible-believing church where lives are transformed by the power of the Gospel of Jesus Christ. We’re passionate about worship, fellowship, discipleship, and evangelism—four key pillars that help us grow in faith and build a strong, loving community.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
             Our foundation is God’s Word, and our heart is to walk with people as they grow in their relationship with Christ. Through various ministries and programs, we offer opportunities for spiritual growth, genuine connection, and meaningful service.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us every Sunday at 10 AM for a joyful and uplifting time together—with powerful worship, inspiring messages, and warm fellowship. Whether you've been following Jesus for years or are just beginning your faith journey, there's a place for you here at Faith Temple.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Faith Temple is led by Sridhar, a passionate Bible teacher with a Master of Divinity in Christian Apologetics from Liberty University in Virginia, USA. He has a heart for reaching young people and those facing life’s challenges, sharing the life-changing truth of Jesus with compassion and clarity. Sridhar’s wife, Ramya, shares his love for church ministry, and together they’re raising two wonderful boys, Yesasvi and Yeshmith, who bring joy to their lives and inspire those around them.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Come and be a part of what God is doing—there’s a place for you at Faith Temple!
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
              src="https://lctech.in/faithtemple-images/img25.jpeg"
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