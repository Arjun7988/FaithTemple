import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="location" className="py-20 bg-white dark:bg-navy-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-maroon-600" />
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white">Visit Us</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join us for worship at Faith Temple, Mangalagiri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5793990825387!2d80.54760797507825!3d16.381675333730395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2b29f4ef7%3A0x3f7bc00c814a2c4!2sFaith%20Temple!5e0!3m2!1sen!2sin!4v1709641774761!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Faith Temple Location"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-navy-700 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    NRI Hospital Road, Opp. SR Residency,<br />
                    Mangalagiri, AP, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-1">Service Times</h4>
                  <p className="text-gray-600 dark:text-gray-300">Sunday: 10:00 AM - 12:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 7799212199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-1">Email</h4>
                  <a 
                    href="mailto:faithtempleindia@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-maroon-600 dark:hover:text-maroon-400 transition-colors"
                  >
                    faithtempleindia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/3ZZGBRdQsEZT6G4VA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-navy-600 to-maroon-600 text-white hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;